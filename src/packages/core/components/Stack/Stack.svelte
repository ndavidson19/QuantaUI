<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      space?: {
        base?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        sm?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        md?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        lg?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      };
      class?: string;
    }
  
    export let space: $$Props['space'] = { base: 'md' };
  
    const createSpace = (size: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
      const spaces = {
        none: 'space-y-0',
        xs: 'space-y-2',
        sm: 'space-y-4',
        md: 'space-y-6',
        lg: 'space-y-8',
        xl: 'space-y-12'
      };
      return spaces[size];
    };
  
    $: baseSpace = createSpace(space.base || 'md');
    $: smSpace = space.sm ? `sm:${createSpace(space.sm)}` : '';
    $: mdSpace = space.md ? `md:${createSpace(space.md)}` : '';
    $: lgSpace = space.lg ? `lg:${createSpace(space.lg)}` : '';
  </script>
  
  <div
    class={cn(
      'flex flex-col',
      baseSpace,
      smSpace,
      mdSpace,
      lgSpace,
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>