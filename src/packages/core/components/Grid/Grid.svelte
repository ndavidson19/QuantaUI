<script lang="ts">
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      cols?: {
        base?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        sm?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        md?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
        lg?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
      };
      gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
      class?: string;
    }
  
    export let cols: $$Props['cols'] = { base: 1, md: 2, lg: 3 };
    export let gap: $$Props['gap'] = 'md';
  
    const createGridCols = (columns: number) => {
      const map = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
        12: 'grid-cols-12'
      };
      return map[columns];
    };
  
    const gaps = {
      none: 'gap-0',
      xs: 'gap-2',
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12'
    };
  
    $: baseGridCols = cols.base ? createGridCols(cols.base) : 'grid-cols-1';
    $: smGridCols = cols.sm ? `sm:${createGridCols(cols.sm)}` : '';
    $: mdGridCols = cols.md ? `md:${createGridCols(cols.md)}` : '';
    $: lgGridCols = cols.lg ? `lg:${createGridCols(cols.lg)}` : '';
  </script>
  
  <div
    class={cn(
      'grid',
      baseGridCols,
      smGridCols,
      mdGridCols,
      lgGridCols,
      gaps[gap],
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </div>