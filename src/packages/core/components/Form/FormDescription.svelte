<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLParagraphAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLParagraphAttributes {
      class?: string;
    }
  </script>
  
  <p
    class={cn('text-sm text-muted-foreground', $$props.class)}
    {...$$restProps}
  >
    <slot />
  </p>