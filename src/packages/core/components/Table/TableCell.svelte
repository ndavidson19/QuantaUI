<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
    import { createEventDispatcher } from 'svelte';
  
    interface $$Props extends HTMLAttributes<HTMLTableCellElement> {
      header?: boolean;
      align?: 'left' | 'center' | 'right';
  
      /**
       *  If `chart` is true, we display the "expand chart" button inside the cell.
       */
      chart?: boolean;
      chartData?: any;
      chartType?: 'line' | 'candlestick';
  
      class?: string;
    }
  
    export let header: $$Props['header'] = false;
    export let align: $$Props['align'] = 'left';
    export let chart: $$Props['chart'] = false;
    export let chartData: $$Props['chartData'] = null;
    export let chartType: $$Props['chartType'] = 'line';
  
    const dispatch = createEventDispatcher();
  
    const alignments = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    };
  </script>
  
  {#if header}
    <th
      class={cn(
        'px-4 py-3 font-medium whitespace-nowrap',
        alignments[align],
        $$props.class
      )}
      {...$$restProps}
    >
      <slot />
    </th>
  {:else}
    <td
      class={cn(
        'px-4 py-3 align-top',
        alignments[align],
        $$props.class
      )}
      {...$$restProps}
    >
      <div class="flex items-center gap-2">
        <slot />
        {#if chart && chartData}
          <!-- Expand chart button -->
          <button
            type="button"
            class="p-1 text-gray-500 hover:text-gray-700"
            on:click={() => dispatch('openChart', { chartData, chartType })}
          >
            <!-- Simple icon or your own -->
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
              <path d="M16 3h3a2 2 0 0 1 2 2v3"></path>
              <path d="M8 21H5a2 2 0 0 1-2-2v-3"></path>
              <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
            </svg>
          </button>
        {/if}
      </div>
    </td>
  {/if}
  