<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLTableElement> {
      /**
       *  Whether the rows should be striped (alternate background color).
       *  Applies a background color to every second row.
       */
      striped?: boolean;
  
      /**
       *  Whether rows should have a hover effect.
       */
      hoverable?: boolean;
  
      /**
       *  Whether the table should have borders around it.
       */
      bordered?: boolean;
  
      /**
       *  Whether the table should be compact (less padding).
       */
      compact?: boolean;
  
      class?: string;
    }
  
    export let striped: $$Props['striped'] = false;
    export let hoverable: $$Props['hoverable'] = true;
    export let bordered: $$Props['bordered'] = false;
    export let compact: $$Props['compact'] = false;
  </script>
  
  <table
    class={cn(
      // Base styles
      'w-full text-sm text-gray-700',
      'border-collapse',
  
      // Conditional styles
      bordered && 'border border-gray-200',
      striped && '[&_tbody_tr:nth-child(even)]:bg-gray-50',
      hoverable && '[&_tbody_tr:hover]:bg-gray-50',
      compact ? 'p-2' : 'p-4',
  
      // Custom class
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </table>
  