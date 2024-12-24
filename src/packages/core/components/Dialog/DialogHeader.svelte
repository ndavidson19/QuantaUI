<!-- DialogHeader.svelte -->
<script lang="ts">
    import { cn } from '$utils/cn';
    import { X } from 'lucide-svelte';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      class?: string;
      showClose?: boolean;
    }
  
    export let showClose: $$Props['showClose'] = true;
  </script>
  
  <div
    class={cn(
      'flex items-center justify-between',
      'pb-4 border-b dark:border-gray-700',
      $$props.class
    )}
    {...$$restProps}
  >
    <div class="flex-1">
      <slot />
    </div>
    
    {#if showClose}
      <button
        class="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        on:click={() => dispatchEvent(new CustomEvent('close'))}
      >
        <X class="h-4 w-4" />
      </button>
    {/if}
  </div>