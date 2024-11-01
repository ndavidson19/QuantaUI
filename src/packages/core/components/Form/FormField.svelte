<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      error?: string;
      class?: string;
    }
  
    export let error: $$Props['error'] = undefined;
  </script>
  
  <div class={cn('space-y-2', $$props.class)} {...$$restProps}>
    <slot />
    {#if error}
      <p class="text-sm font-medium text-destructive">{error}</p>
    {/if}
  </div>