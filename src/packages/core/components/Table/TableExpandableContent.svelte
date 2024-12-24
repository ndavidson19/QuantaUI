<script lang="ts">
    import { cn } from '$utils/cn';
    import { slide } from 'svelte/transition';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLTableRowElement> {
      colspan: number;
      class?: string;
    }
  
    export let colspan: $$Props['colspan'];
  </script>
  
  <tr>
    <td {colspan} class={cn('p-0', $$props.class)} {...$$restProps}>
      <div 
        class="overflow-hidden"
        transition:slide|local={{ duration: 200 }}
      >
        <div class="p-4 bg-gray-50 dark:bg-gray-900">
          <slot />
        </div>
      </div>
    </td>
  </tr>