<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      variant?: 'default' | 'bordered' | 'ghost';
      size?: 'sm' | 'md' | 'lg';
      class?: string;
    }
  
    export let variant: $$Props['variant'] = 'default';
    export let size: $$Props['size'] = 'md';
  
    const variants = {
      default: 'bg-white dark:bg-gray-800 shadow-lg',
      bordered: 'border border-gray-200 dark:border-gray-700',
      ghost: 'bg-transparent'
    };
  
    const sizes = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    };
  </script>
  
  <div
    class={cn(
      'rounded-lg',
      variants[variant],
      sizes[size],
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>
  