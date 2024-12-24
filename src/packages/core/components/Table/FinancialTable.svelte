<!-- FinancialTable.svelte -->
<script lang="ts">
    import {
      Table,
      TableHeader,
      TableBody,
      TableFooter,
      TableRow,
      TableCell
    } from '$core'; // Or wherever you place your table components
    import {
      LineChart,
      CandlestickChart
    } from '$charts';
    import {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogTitle,
      Button,
      Card,
      CardHeader,
      CardContent,
      CardTitle
    } from '$core';
    import { Maximize2 } from 'lucide-svelte';
  
    interface FinancialData {
      id: string;
      date: Date;
      revenue: number;
      expenses: number;
      profit: number;
      trendData: Array<{ date: Date; value: number }>;
      stockData: Array<{
        date: Date;
        open: number;
        high: number;
        low: number;
        close: number;
      }>;
      miniChartData: Array<{ date: Date; value: number }>;
    }
  
    interface $$Props {
      data: FinancialData[];
      title?: string;
      itemsPerPage?: number;
      class?: string;
    }
  
    export let data: $$Props['data'] = [];
    export let title: $$Props['title'] = 'Financial Performance';
    export let itemsPerPage: $$Props['itemsPerPage'] = 5;
  
    let currentPage = 1;
    let expandedRows = new Set<string>();
    let dialogOpen = false;
    let selectedChart = {
      data: null,
      type: 'line' as const,
      title: ''
    };
  
    // Pagination data
    $: paginatedData = data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    function handlePageChange(event: CustomEvent<{ page: number }>) {
      currentPage = event.detail.page;
      expandedRows.clear();
    }
  
    function toggleRow(id: string) {
      if (expandedRows.has(id)) {
        expandedRows.delete(id);
      } else {
        expandedRows.add(id);
      }
      expandedRows = expandedRows;
    }
  
    function openChartDialog(chartData: any, type: 'line' | 'candlestick', chartTitle: string) {
      selectedChart = {
        data: chartData,
        type,
        title: chartTitle
      };
      dialogOpen = true;
    }
  
    const formatCurrency = (value: number) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(value);
  </script>
  
  <Card class="overflow-hidden {$$props.class || ''}">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent class="p-0">
      <Table bordered striped>
        <TableHeader sticky>
          <TableRow>
            <!-- Extra header cell for the chevron (expand) -->
            <TableCell header />
            <TableCell header>Date</TableCell>
            <TableCell header align="right">Revenue</TableCell>
            <TableCell header>Revenue Trend</TableCell>
            <TableCell header align="right">Expenses</TableCell>
            <TableCell header align="right">Profit</TableCell>
            <TableCell header>Profit Trend</TableCell>
          </TableRow>
        </TableHeader>
  
        <TableBody>
          {#each paginatedData as row (row.id)}
            <TableRow
              expandable
              expanded={expandedRows.has(row.id)}
              on:click={() => toggleRow(row.id)}
            >
              <!-- The chevron is inserted automatically by TableRow.svelte 
                   because `expandable={true}`. This aligns under the "empty" 
                   header cell above. -->
  
              <TableCell>
                {row.date.toLocaleDateString()}
              </TableCell>
  
              <TableCell align="right">
                <div class="flex items-center justify-end gap-2">
                  {formatCurrency(row.revenue)}
                  <Button
                  variant="ghost"
                  size="icon"
                  class="h-6 w-6"
                  on:click={(event) => {
                    event.stopPropagation(); // <-- manually stop event
                    openChartDialog(row.trendData, 'line', 'Revenue Trend');
                  }}
                >
                    <Maximize2 class="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
  
              <TableCell>
                <div class="h-8 w-32">
                  <LineChart
                    data={row.miniChartData.map(d => ({
                      date: d.date,
                      value: d.value * 1.6
                    }))}
                    compact
                    color="stroke-blue-500"
                  />
                </div>
              </TableCell>
  
              <TableCell align="right">
                {formatCurrency(row.expenses)}
              </TableCell>
  
              <TableCell align="right">
                <div class="flex items-center justify-end gap-2">
                  <span class={row.profit >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {formatCurrency(row.profit)}
                  </span>
                  <Button
                  variant="ghost"
                  size="icon"
                  class="h-6 w-6"
                  on:click={(event) => {
                    event.stopPropagation(); // <-- manually stop event
                    openChartDialog(row.trendData, 'line', 'Profit Trend');
                  }}
                >
                    <Maximize2 class="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
  
              <TableCell>
                <div class="h-8 w-32">
                  <LineChart
                    data={row.miniChartData}
                    compact
                    color={row.profit >= 0 ? 'stroke-green-500' : 'stroke-red-500'}
                  />
                </div>
              </TableCell>
            </TableRow>
  
            {#if expandedRows.has(row.id)}
              <!-- Expanded content -->
              <tr>
                <!-- We need to ensure this spans 7 columns (empty expand col + 6 data cols) -->
                <td colspan="7" class="p-6 bg-gray-50">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white rounded-lg p-4 shadow-sm">
                      <h3 class="text-lg font-medium mb-4">30-Day Profit Trend</h3>
                      <div class="h-64">
                        <LineChart
                          data={row.trendData}
                          color={row.profit >= 0 ? 'stroke-green-500' : 'stroke-red-500'}
                          showGrid
                          showTooltip
                        />
                      </div>
                    </div>
  
                    <div class="bg-white rounded-lg p-4 shadow-sm">
                      <h3 class="text-lg font-medium mb-4">Stock Performance</h3>
                      <div class="h-64">
                        <CandlestickChart
                          data={row.stockData}
                          showTooltip
                          showGrid
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            {/if}
          {/each}
        </TableBody>
  
        <TableFooter>
          <TableRow>
            <!-- Spanning all 7 columns (the "expand" column + 6 data columns) -->
            <TableCell colspan={7} class="text-center">
              <!-- Example pagination. You’ll need your own pagination logic / component -->
              <div class="flex justify-center py-2">
                <button
                  on:click={() => {
                    if (currentPage > 1) {
                      currentPage--;
                      expandedRows.clear();
                    }
                  }}
                  class="px-3 py-1 mx-1 border rounded"
                >
                  Previous
                </button>
                <button
                  on:click={() => {
                    if (currentPage * itemsPerPage < data.length) {
                      currentPage++;
                      expandedRows.clear();
                    }
                  }}
                  class="px-3 py-1 mx-1 border rounded"
                >
                  Next
                </button>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </CardContent>
  </Card>
  
  <Dialog
    open={dialogOpen}
    on:close={() => dialogOpen = false}
  >
    <DialogContent class="max-w-4xl">
      <DialogHeader>
        <DialogTitle>{selectedChart.title}</DialogTitle>
      </DialogHeader>
      <div class="h-96">
        {#if selectedChart.type === 'line'}
          <LineChart
            data={selectedChart.data}
            showGrid
            showTooltip
            color={
              selectedChart.title.includes('Profit')
                ? 'stroke-green-500'
                : 'stroke-blue-500'
            }
          />
        {:else}
          <CandlestickChart
            data={selectedChart.data}
            showGrid
            showTooltip
          />
        {/if}
      </div>
    </DialogContent>
  </Dialog>
  