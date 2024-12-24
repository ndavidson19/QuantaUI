<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
    import { ChevronDown, ChevronRight } from 'lucide-svelte';
  
    interface $$Props extends HTMLAttributes<HTMLTableRowElement> {
      /**
       *  When `true`, a small chevron icon is displayed in the first cell
       *  for expandable rows.
       */
      expandable?: boolean;
  
      /**
       *  Indicates if the row is currently expanded.
       */
      expanded?: boolean;
  
      class?: string;
    }
  
    export let expandable: $$Props['expandable'] = false;
    export let expanded: $$Props['expanded'] = false;
  </script>
  
  <tr
    class={cn(
      // Base styling
      'transition-colors',
  
      // Turn cursor into pointer when row is expandable
      expandable && 'cursor-pointer',
  
      $$props.class
    )}
    {...$$restProps}
    on:click
  >
    {#if expandable}
      <td class="w-4 p-4 align-top">
        {#if expanded}
          <ChevronDown class="h-4 w-4" />
        {:else}
          <ChevronRight class="h-4 w-4" />
        {/if}
      </td>
    {/if}
  
    <!-- The rest of the row content, provided by the parent. -->
    <slot />
  </tr>
  