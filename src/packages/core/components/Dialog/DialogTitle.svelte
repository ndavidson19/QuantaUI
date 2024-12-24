<!-- DialogTitle.svelte -->
<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLHeadingElement> {
      class?: string;
    }
  </script>
  
  <h2
    class={cn(
      'text-lg font-semibold text-gray-900 dark:text-gray-100',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </h2>