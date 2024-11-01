<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
      centered?: boolean;
      class?: string;
    }
  
    export let maxWidth: $$Props['maxWidth'] = 'lg';
    export let centered: $$Props['centered'] = true;
  
    const maxWidths = {
      xs: 'max-w-xs',
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full'
    };
  </script>
  
  <div
    class={cn(
      'w-full px-4 sm:px-6 lg:px-8',
      centered && 'mx-auto',
      maxWidths[maxWidth],
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>