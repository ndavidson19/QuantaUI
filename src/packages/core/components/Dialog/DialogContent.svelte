<!-- DialogContent.svelte -->
<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      class?: string;
    }
  </script>
  
  <div
    class={cn(
      'flex flex-col gap-4',
      'p-6',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>