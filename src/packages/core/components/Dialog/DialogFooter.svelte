<!-- DialogFooter.svelte -->
<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      class?: string;
    }
  </script>
  
  <div
    class={cn(
      'flex items-center justify-end gap-2',
      'pt-4 border-t dark:border-gray-700',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>