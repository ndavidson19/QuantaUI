<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLTableSectionElement> {
      // Rename 'class' to something else like 'customClass'
      customClass?: string;
    }
  
    // Export 'customClass' instead of 'class'
    export let customClass: $$Props['customClass'];
  </script>
  
  <tfoot
    class={cn(
      'bg-gray-50 text-gray-700 font-medium',
      // Use your renamed prop here
      customClass
    )}
    {...$$restProps}
  >
    <slot />
  </tfoot>
  