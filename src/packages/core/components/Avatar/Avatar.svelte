  <script lang="ts">
    import { Avatar as AvatarPrimitive } from 'bits-ui';
    import { cn } from '$utils/cn';
    import type { HTMLAttributes } from 'svelte/elements';
  
    interface $$Props extends HTMLAttributes<HTMLDivElement> {
      src?: string;
      alt?: string;
      fallback?: string;
      size?: 'sm' | 'md' | 'lg' | 'xl';
      delayMs?: number;
      class?: string;
    }
  
    export let src: $$Props['src'] = undefined;
    export let alt: $$Props['alt'] = undefined;
    export let fallback: $$Props['fallback'] = undefined;
    export let size: $$Props['size'] = 'md';
    export let delayMs: $$Props['delayMs'] = 0;
  
    const sizes = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-base',
      xl: 'h-16 w-16 text-lg'
    };
  
    export let loadingStatus: AvatarPrimitive.Props['loadingStatus'] = undefined;
  </script>
  
  <AvatarPrimitive.Root
    bind:loadingStatus
    {delayMs}
    class={cn(
      'relative flex shrink-0 overflow-hidden rounded-full',
      sizes[size],
      loadingStatus === 'loaded' ? 'border-foreground' : 'border-transparent',
      'bg-muted',
      $$props.class
    )}
    {...$$restProps}
  >
    <div class="flex h-full w-full items-center justify-center overflow-hidden rounded-full">
      {#if src}
        <AvatarPrimitive.Image
          {src}
          {alt}
          class="h-full w-full object-cover"
        />
      {/if}
      <AvatarPrimitive.Fallback
        class="flex h-full w-full items-center justify-center rounded-full bg-muted font-medium"
      >
        {fallback || (alt ? alt.slice(0, 2).toUpperCase() : 'U')}
      </AvatarPrimitive.Fallback>
    </div>
  </AvatarPrimitive.Root>