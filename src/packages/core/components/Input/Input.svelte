<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLInputAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLInputAttributes {
      size?: 'sm' | 'md' | 'lg';
      error?: boolean;
      class?: string;
    }
  
    export let size: $$Props['size'] = 'md';
    export let error: $$Props['error'] = false;
  
    const sizes = {
      sm: 'h-8 text-sm px-3',
      md: 'h-10 px-4',
      lg: 'h-12 px-4'
    };
  </script>
  
  <input
    class={cn(
      'flex w-full rounded-md border border-input bg-background ring-offset-background',
      'placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      error && 'border-destructive focus-visible:ring-destructive',
      sizes[size],
      $$props.class
    )}
    {...$$restProps}
  />