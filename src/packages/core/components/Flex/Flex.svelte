<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      direction?: {
        base?: 'row' | 'col';
        sm?: 'row' | 'col';
        md?: 'row' | 'col';
        lg?: 'row' | 'col';
      };
      align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
      justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
      gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      wrap?: boolean;
      class?: string;
    }
  
    export let direction: $$Props['direction'] = { base: 'row' };
    export let align: $$Props['align'] = 'start';
    export let justify: $$Props['justify'] = 'start';
    export let gap: $$Props['gap'] = 'md';
    export let wrap: $$Props['wrap'] = false;
  
    const createFlexDirection = (dir: 'row' | 'col') => {
      return dir === 'row' ? 'flex-row' : 'flex-col';
    };
  
    const alignments = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline'
    };
  
    const justifications = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };
  
    const gaps = {
      none: 'gap-0',
      xs: 'gap-2',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12'
    };
  
    $: baseDirection = createFlexDirection(direction.base || 'row');
    $: smDirection = direction.sm ? `sm:${createFlexDirection(direction.sm)}` : '';
    $: mdDirection = direction.md ? `md:${createFlexDirection(direction.md)}` : '';
    $: lgDirection = direction.lg ? `lg:${createFlexDirection(direction.lg)}` : '';
  </script>
  
  <div
    class={cn(
      'flex',
      baseDirection,
      smDirection,
      mdDirection,
      lgDirection,
      alignments[align],
      justifications[justify],
      gaps[gap],
      wrap && 'flex-wrap',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>