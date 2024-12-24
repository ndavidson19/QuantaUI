<script lang="ts">
  import { scaleLinear, scaleTime } from 'd3-scale';
  import { extent, max, min } from 'd3-array';
  import { line } from 'd3-shape';
  import { setContext } from 'svelte';
  import { Axis, ChartContainer } from '$charts';
  import { cn } from '$utils/cn';

  interface DataPoint {
    date: Date;
    value: number;
  }

  interface $$Props {
    data: DataPoint[];
    width?: string;
    height?: string;
    color?: string;
    class?: string;
  }

  export let data: $$Props['data'];
  export let width: $$Props['width'] = 'w-full';
  export let height: $$Props['height'] = 'h-64';
  export let color: $$Props['color'] = 'stroke-blue-500';

  $: padding = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  };

  // Calculate dimensions
  $: dimensions = {
    width: 800 - padding.left - padding.right,
    height: 400 - padding.top - padding.bottom
  };

  // Create scales with proper typing
  $: xScale = scaleTime<number, number>()
    .domain(extent(data, d => d.date) as [Date, Date])
    .range([0, dimensions.width])
    .nice(); // Add nice() to round the domain to nice values

  $: yScale = scaleLinear<number, number>()
    .domain([
      min(data, d => d.value) * 0.95,
      max(data, d => d.value) * 1.05
    ] as [number, number])
    .range([dimensions.height, 0])
    .nice(); // Add nice() to round the domain to nice values

  // Create line generator with proper typing
  $: lineGenerator = line<DataPoint>()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value));

  // Set context for child components
  $: {
    // Update context whenever scales change
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

<!-- Line -->
<path
  d={lineGenerator(data)}
  class={cn('fill-none', color, 'stroke-2')}
/>

<!-- Data points -->
{#each data as point}
  <circle
    cx={xScale(point.date)}
    cy={yScale(point.value)}
    r={3}
    class={cn('fill-white stroke-2', color)}
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
  values={data.map(d => d.value)}
  format={d => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(d)}
/>
</ChartContainer>