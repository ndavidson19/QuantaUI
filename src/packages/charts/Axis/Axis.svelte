<script lang="ts">
    import { getContext } from 'svelte';
    
    export let type: 'x' | 'y';
    export let values: number[] | Date[];
    export let format: (value: any) => string = (d) => d.toString();
    export let ticks = 5;
    
    const scales = getContext('scales');
    const dimensions = getContext('dimensions');
    
    $: scale = type === 'x' ? scales.x : scales.y;
    $: tickValues = scale.ticks(ticks);
    
    // Position calculation for axis lines and labels
    $: transform = type === 'x' 
      ? `translate(0,${dimensions.height})`
      : '';
  </script>
  
  <g class="axis" {transform}>
    <!-- Axis line -->
    {#if type === 'x'}
      <line
        x1={0}
        y1={0}
        x2={dimensions.width}
        y2={0}
        class="stroke-gray-300"
      />
    {:else}
      <line
        x1={0}
        y1={0}
        x2={0}
        y2={dimensions.height}
        class="stroke-gray-300"
      />
    {/if}
    
    <!-- Ticks and labels -->
    {#each tickValues as tick}
      {#if type === 'x'}
        <g transform={`translate(${scale(tick)},0)`}>
          <line y2={6} class="stroke-gray-300" />
          <text
            y={9}
            dy=".71em"
            class="text-xs fill-gray-600"
            text-anchor="middle"
          >
            {format(tick)}
          </text>
        </g>
      {:else}
        <g transform={`translate(0,${scale(tick)})`}>
          <line x2={-6} class="stroke-gray-300" />
          <text
            x={-9}
            dy=".32em"
            class="text-xs fill-gray-600"
            text-anchor="end"
          >
            {format(tick)}
          </text>
        </g>
      {/if}
    {/each}
  </g>