<script lang="ts">
    import { FinancialTable } from '$core';
    import { onMount } from 'svelte';

    function generateTrendData(baseDate: Date, baseValue: number, length = 30) {
      return Array.from({ length }, (_, j) => {
        const date = new Date(baseDate);
        date.setDate(date.getDate() - j);
        return {
          date,
          value: Math.round(baseValue * (1 + (Math.random() * 0.4 - 0.2)))
        };
      }).reverse();
    }

    function generateStockData(baseDate: Date, length = 5) {
      return Array.from({ length }, (_, j) => {
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
    }

    function generateData(length = 20) {
      return Array.from({ length }, (_, i) => {
        const baseDate = new Date(2024, 0, i + 1);
        const revenue = Math.round(100000 + Math.random() * 50000);
        const expenses = Math.round(60000 + Math.random() * 30000);
        const profit = revenue - expenses;

        const trendData = generateTrendData(baseDate, profit);
        const stockData = generateStockData(baseDate);

        return {
          id: (i + 1).toString(),
          date: baseDate,
          revenue,
          expenses,
          profit,
          trendData,
          stockData,
          miniChartData: trendData.slice(-7)
        };
      });
    }

    let financialData = generateData();

    onMount(() => {
      const interval = setInterval(() => {
        financialData = generateData();
      }, 5000);

      return () => clearInterval(interval);
    });
</script>

<FinancialTable
  data={financialData}
  title="Financial Performance Dashboard"
  itemsPerPage={5}
/>