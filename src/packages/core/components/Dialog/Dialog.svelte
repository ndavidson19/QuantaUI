<!-- Dialog.svelte -->
<script lang="ts">
    import { cn } from '$utils/cn';
    import { X } from 'lucide-svelte';
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      open?: boolean;
      class?: string;
    }
  
    export let open: $$Props['open'] = false;
  
    const dispatch = createEventDispatcher();
  
    function closeDialog() {
      dispatch('close');
    }
  
    function handleBackdropClick(event: MouseEvent) {
      if (event.target === event.currentTarget) {
        closeDialog();
      }
    }
  
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        closeDialog();
      }
    }
  </script>
  
  <svelte:window on:keydown={handleEscape} />
  
  {#if open}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center"
      transition:fade={{ duration: 200 }}
      on:click={handleBackdropClick}
    >
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/50"
        aria-hidden="true"
      />
      
      <!-- Dialog content -->
      <div
        role="dialog"
        aria-modal="true"
        class={cn(
          'relative z-50 flex flex-col bg-white dark:bg-gray-800',
          'rounded-lg shadow-lg',
          'max-h-[90vh] max-w-[90vw]',
          $$props.class
        )}
      >
        <slot />
      </div>
    </div>
  {/if}