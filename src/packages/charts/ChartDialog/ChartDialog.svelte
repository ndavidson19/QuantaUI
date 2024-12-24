<!-- ChartDialog.svelte -->
<script lang="ts">
    import { Dialog, DialogContent, DialogHeader, DialogTitle } from "$core";
    import { LineChart, CandlestickChart } from '$charts';
  
    export let open = false;
    export let title = "";
    export let chartData: any;
    export let chartType: 'line' | 'candlestick' = 'line';
  </script>
  
  <Dialog {open} on:close={() => (open = false)}>
    <DialogContent class="max-w-4xl">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <div class="h-96">
        {#if chartType === 'line'}
          <LineChart data={chartData} height="h-full" />
        {:else}
          <CandlestickChart data={chartData} height="h-full" />
        {/if}
      </div>
    </DialogContent>
  </Dialog>