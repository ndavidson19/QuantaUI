  <script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { cn } from '$utils/cn';

    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      class?: string;
    }
  </script>
  
  <div 
    class={cn(
      'flex flex-col space-y-1.5 pb-4',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>