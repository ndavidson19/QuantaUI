<script lang="ts">
    import { 
      Table, TableHeader, TableBody, TableFooter, TableRow,
      TableCell, TableExpandableContent, TablePagination,
      Card, CardHeader, CardTitle, CardContent
    } from '$core';
    import { LineChart, CandlestickChart } from '$charts';
  
    // Enhanced sample data with chart data
    const allData = Array.from({ length: 20 }, (_, i) => {
      const baseDate = new Date(2024, 0, i + 1);
      const revenue = Math.round(100000 + Math.random() * 50000);
      const expenses = Math.round(60000 + Math.random() * 30000);
      const profit = revenue - expenses;
  
      // Generate historical data for trends (last 30 days)
      const trendData = Array.from({ length: 30 }, (_, j) => {
        const date = new Date(baseDate);
        date.setDate(date.getDate() - j);
        return {
          date,
          value: Math.round(profit * (1 + (Math.random() * 0.4 - 0.2))) // ±20% variation
        };
      }).reverse();
  
      // Generate stock-like data
      const stockData = Array.from({ length: 5 }, (_, j) => {
        const date = new Date(baseDate);
        date.setDate(date.getDate() - j);
        const baseValue = 100 + Math.random() * 50;
        return {
          date,
          open: baseValue,
          high: baseValue * (1 + Math.random() * 0.05),
          low: baseValue * (1 - Math.random() * 0.05),
          close: baseValue * (1 + (Math.random() * 0.1 - 0.05))
        };
      }).reverse();
  
      return {
        id: (i + 1).toString(),
        date: baseDate,
        revenue,
        expenses,
        profit,
        trendData,
        stockData,
        miniChartData: trendData.slice(-7) // Last 7 days for mini charts
      };
    });
  
    let currentPage = 1;
    let itemsPerPage = 5;
    let expandedRows = new Set();
  
    $: paginatedData = allData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    function handlePageChange(event: CustomEvent<{ page: number }>) {
      currentPage = event.detail.page;
      expandedRows.clear();
      expandedRows = expandedRows;
    }
  
    function toggleRow(id: string) {
      if (expandedRows.has(id)) {
        expandedRows.delete(id);
      } else {
        expandedRows.add(id);
      }
      expandedRows = expandedRows;
    }
  
    // Format currency
    const formatCurrency = (value: number) => 
      new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        maximumFractionDigits: 0 
      }).format(value);
  </script>
  
  <Card class="overflow-hidden">
    <CardHeader>
      <CardTitle>Financial Performance</CardTitle>
    </CardHeader>
    <CardContent class="p-0"> <!-- Remove padding for table -->
      <Table hoverable>
        <TableHeader sticky>
          <TableRow>
            <TableCell header>Date</TableCell>
            <TableCell header align="right">Revenue</TableCell>
            <TableCell header>Revenue Trend</TableCell>
            <TableCell header align="right">Expenses</TableCell>
            <TableCell header align="right">Profit</TableCell>
            <TableCell header>Profit Trend</TableCell>
          </TableRow>
        </TableHeader>
  
        <TableBody>
          {#each paginatedData as row}
            <TableRow
              expandable
              expanded={expandedRows.has(row.id)}
              on:click={() => toggleRow(row.id)}
              class="cursor-pointer hover:bg-gray-50"
            >
              <TableCell>{row.date.toLocaleDateString()}</TableCell>
              <TableCell align="right">{formatCurrency(row.revenue)}</TableCell>
              <TableCell class="w-32">
                <!-- Mini line chart for revenue -->
                <div class="h-8">
                  <LineChart
                    data={row.miniChartData.map(d => ({ 
                      date: d.date, 
                      value: (d.value * 1.6) // Scaled up version for revenue
                    }))}
                    compact
                    color="stroke-blue-500"
                  />
                </div>
              </TableCell>
              <TableCell align="right">{formatCurrency(row.expenses)}</TableCell>
              <TableCell align="right" class={row.profit >= 0 ? 'text-green-600' : 'text-red-600'}>
                {formatCurrency(row.profit)}
              </TableCell>
              <TableCell class="w-32">
                <!-- Mini line chart for profit -->
                <div class="h-8">
                  <LineChart
                    data={row.miniChartData}
                    compact
                    color={row.profit >= 0 ? 'stroke-green-500' : 'stroke-red-500'}
                  />
                </div>
              </TableCell>
            </TableRow>
  
            {#if expandedRows.has(row.id)}
              <TableExpandableContent colspan={6}>
                <div class="grid grid-cols-2 gap-6 p-6 bg-gray-50">
                  <!-- Detailed profit trend -->
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
                  <!-- Stock performance -->
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
              </TableExpandableContent>
            {/if}
          {/each}
        </TableBody>
  
        <TableFooter>
          <TableRow>
            <TableCell colspan={6}>
              <TablePagination
                totalItems={allData.length}
                {itemsPerPage}
                {currentPage}
                on:pageChange={handlePageChange}
                class="py-2"
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </CardContent>
  </Card>