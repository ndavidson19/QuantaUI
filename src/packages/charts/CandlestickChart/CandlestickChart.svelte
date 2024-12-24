<script lang="ts">
  import { scaleLinear, scaleTime } from 'd3-scale';
  import { extent, max, min } from 'd3-array'; 
  import { setContext } from 'svelte';
  import { Axis, ChartContainer } from '$charts';
  import { cn } from '$utils/cn';

  interface CandleData {
    date: Date;
    open: number;
    high: number;
    low: number;
    close: number; 
  }

  interface $$Props {
    data: CandleData[];
    width?: string;
    height?: string;
    class?: string;
  }

  export let data: $$Props['data'];
  export let width: $$Props['width'] = 'w-full';
  export let height: $$Props['height'] = 'h-64';

  $: padding = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  };

  $: dimensions = {
    width: 800 - padding.left - padding.right,
    height: 400 - padding.top - padding.bottom
  };

  // Create scales with proper typing
  $: xScale = scaleTime<number, number>()
    .domain(extent(data, d => d.date) as [Date, Date])
    .range([0, dimensions.width])
    .nice();

  $: yScale = scaleLinear<number, number>()
    .domain([
      min(data, d => d.low) * 0.99,
      max(data, d => d.high) * 1.01
    ] as [number, number])
    .range([dimensions.height, 0])
    .nice();

  // Set context for child components
  $: {
    setContext('scales', { 
      x: xScale, 
      y: yScale 
    });
    setContext('dimensions', dimensions);
  }
</script>

<ChartContainer {width} {height}>
<!-- Grid lines -->
{#each yScale.ticks(5) as tick}
  <line
    x1={0}
    y1={yScale(tick)}
    x2={dimensions.width}
    y2={yScale(tick)}
    class="stroke-gray-100"
  />
{/each}

<!-- Candlesticks -->
{#each data as candle}
  {@const x = xScale(candle.date)}
  {@const isUp = candle.close > candle.open}
  
  <!-- Wick -->
  <line
    x1={x}
    y1={yScale(candle.high)}
    x2={x}
    y2={yScale(candle.low)}
    class="stroke-gray-400"  
  />
  
  <!-- Body -->
  <rect
    x={x - 5}
    y={yScale(Math.max(candle.open, candle.close))}
    width={10}
    height={Math.abs(yScale(candle.open) - yScale(candle.close))}
    class={cn(
      isUp ? 'fill-green-500' : 'fill-red-500',
      'stroke-none'
    )}
  />
{/each}

<!-- Axes -->
<Axis
  type="x"
  values={data.map(d => d.date)}
  format={d => new Date(d).toLocaleDateString()}
/>
<Axis
  type="y"
  values={data.map(d => d.high)}
  format={d => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(d)}
/>
</ChartContainer>