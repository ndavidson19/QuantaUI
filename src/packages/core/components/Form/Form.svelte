<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLFormElement> {
      class?: string;
    }
  </script>
  
  <form
    class={cn('space-y-6', $$props.class)}
    {...$$restProps}
    on:submit|preventDefault
  >
    <slot />
  </form>
  