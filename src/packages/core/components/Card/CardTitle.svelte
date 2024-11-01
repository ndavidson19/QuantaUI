<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
    import { cn } from '$utils/cn';

    interface $$Props extends HTMLAttributes<HTMLHeadingElement> {
      class?: string;
      level?: 1 | 2 | 3 | 4 | 5 | 6;
    }
  
    export let level: $$Props['level'] = 3;
  </script>
  
  <svelte:element
    this={`h${level}`}
    class={cn(
      'font-semibold leading-none tracking-tight',
      $$props.class
    )}
    {...$$restProps}
  >
    <slot />
  </svelte:element>
  
  