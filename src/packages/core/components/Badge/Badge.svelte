<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'success';
      size?: 'sm' | 'md' | 'lg';
      class?: string;
    }
  
    export let variant: $$Props['variant'] = 'default';
    export let size: $$Props['size'] = 'md';
  
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      success: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200/90'
    };
  
    const sizes = {
      sm: 'text-xs px-2 py-0.5 rounded',
      md: 'text-sm px-2.5 py-0.5 rounded-md',
      lg: 'px-3 py-1 rounded-md'
    };
  </script>
  
  <div
    class={cn(
      'inline-flex items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      variants[variant],
      sizes[size],
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>