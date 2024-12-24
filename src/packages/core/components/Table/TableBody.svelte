<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLTableSectionElement> {
        customClass?: string;
    }
  
    // Export 'customClass' instead of 'class'
    export let customClass: $$Props['customClass'];
  </script>
  
  <tbody
    class={cn(
      // Body base styling
      'divide-y divide-gray-100',
      customClass
    )}
    {...$$restProps}
  >
    <slot />
  </tbody>
  