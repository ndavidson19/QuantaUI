<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLTableSectionElement> {
      /**
       *  Makes the header "sticky" at the top of a scrollable container.
       */
      sticky?: boolean;
      class?: string;
    }
  
    export let sticky: $$Props['sticky'] = false;
  </script>
  
  <thead
    class={cn(
      // Base styles for header
      'bg-gray-50 text-gray-700 font-medium',
      // Sticky if required
      sticky && 'sticky top-0 z-10',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </thead>
  