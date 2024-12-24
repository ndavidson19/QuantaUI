
<script lang="ts">
    import { cn } from '$utils/cn';
    import { Button } from '$core';
    import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-svelte';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      totalItems: number;
      itemsPerPage?: number;
      currentPage?: number;
      showFirstLast?: boolean;
      siblingCount?: number;
      class?: string;
    }
  
    export let totalItems: $$Props['totalItems'];
    export let itemsPerPage: $$Props['itemsPerPage'] = 10;
    export let currentPage: $$Props['currentPage'] = 1;
    export let showFirstLast: $$Props['showFirstLast'] = true;
    export let siblingCount: $$Props['siblingCount'] = 1;
  
    $: totalPages = Math.ceil(totalItems / itemsPerPage);
    $: startItem = (currentPage - 1) * itemsPerPage + 1;
    $: endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
    function range(start: number, end: number) {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
  
    $: pages = (() => {
      const totalNumbers = siblingCount * 2 + 3;
      const totalBlocks = totalNumbers + 2;
  
      if (totalPages <= totalBlocks) {
        return range(1, totalPages);
      }
  
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
  
      const shouldShowLeftDots = leftSiblingIndex > 2;
      const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
  
      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        return [...range(1, leftItemCount), -1, totalPages];
      }
  
      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        return [1, -1, ...range(totalPages - rightItemCount + 1, totalPages)];
      }
  
      return [
        1,
        -1,
        ...range(leftSiblingIndex, rightSiblingIndex),
        -1,
        totalPages
      ];
    })();
  
    function goToPage(page: number) {
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
        dispatch('pageChange', { page });
      }
    }
  
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  </script>
  
  <div 
    class={cn(
      'flex items-center justify-between gap-2 px-2',
      $$props.class
    )}
    {...$$restProps}
  >
    <!-- Items info -->
    <div class="text-sm text-gray-700 dark:text-gray-300">
      Showing <span class="font-medium">{startItem}</span> to{' '}
      <span class="font-medium">{endItem}</span> of{' '}
      <span class="font-medium">{totalItems}</span> results
    </div>
  
    <!-- Navigation -->
    <div class="flex items-center gap-1">
      {#if showFirstLast}
        <Button
          variant="ghost"
          size="sm"
          disabled={currentPage === 1}
          on:click={() => goToPage(1)}
        >
          <ChevronsLeft class="h-4 w-4" />
        </Button>
      {/if}
  
      <Button
        variant="ghost"
        size="sm"
        disabled={currentPage === 1}
        on:click={() => goToPage(currentPage - 1)}
      >
        <ChevronLeft class="h-4 w-4" />
      </Button>
  
      {#each pages as page}
        {#if page === -1}
          <span class="px-2 text-gray-500">...</span>
        {:else}
          <Button
            variant={page === currentPage ? 'primary' : 'ghost'}
            size="sm"
            on:click={() => goToPage(page)}
          >
            {page}
          </Button>
        {/if}
      {/each}
  
      <Button
        variant="ghost"
        size="sm"
        disabled={currentPage === totalPages}
        on:click={() => goToPage(currentPage + 1)}
      >
        <ChevronRight class="h-4 w-4" />
      </Button>
  
      {#if showFirstLast}
        <Button
          variant="ghost"
          size="sm"
          disabled={currentPage === totalPages}
          on:click={() => goToPage(totalPages)}
        >
          <ChevronsRight class="h-4 w-4" />
        </Button>
      {/if}
    </div>
  </div>