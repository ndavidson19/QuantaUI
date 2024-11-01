  <script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { cn } from '$utils/cn';

    interface $$Props extends HTMLAttributes<HTMLParagraphElement> {
      class?: string;
    }
  </script>
  
  <p
    class={cn(
      'text-sm text-gray-500 dark:text-gray-400',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </p>