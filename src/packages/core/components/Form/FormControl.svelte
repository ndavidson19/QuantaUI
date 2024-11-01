<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLDivAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLDivAttributes {
      class?: string;
    }
  </script>
  
  <div
    class={cn('relative', $$props.class)}
    {...$$restProps}
  >
    <slot />
  </div>