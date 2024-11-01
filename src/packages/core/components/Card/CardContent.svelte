<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { cn } from '$utils/cn';
    
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      class?: string;
    }
  </script>
  
  <div 
    class={cn(
      'pt-0',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>