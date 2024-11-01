<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLLabelAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLLabelAttributes {
      required?: boolean;
      class?: string;
    }
  
    export let required: $$Props['required'] = false;
  </script>
  
  <label
    class={cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
    {#if required}
      <span class="text-destructive">*</span>
    {/if}
  </label>