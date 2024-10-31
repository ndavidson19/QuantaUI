<script lang="ts">
  import { createSwitch, melt } from '@melt-ui/svelte';
  import { cn } from '$utils/cn';

  interface $$Props {
    label?: string;
    disabled?: boolean;
    class?: string;
  }

  export let label: $$Props['label'] = undefined;
  export let disabled: $$Props['disabled'] = false;
  let className: $$Props['class'] = undefined;
  export { className as class };

  const {
    elements: { root, input },
  } = createSwitch({
    disabled
  });
</script>

<div class="flex items-center">
  {#if label}
    <label
      class="pr-4 leading-none text-gray-900"
      id="switch-label"
    >
      {label}
    </label>
  {/if}
  
  <button
    use:melt={$root}
    class={cn(
      "relative h-6 cursor-default rounded-full bg-gray-200 transition-colors",
      "data-[state=checked]:bg-primary-500",
      disabled && "opacity-50 cursor-not-allowed",
      className
    )}
    aria-labelledby="switch-label"
  >
    <span class="thumb block rounded-full bg-white transition-transform" />
  </button>
  
  <input use:melt={$input} class="sr-only" />
</div>

<style>
  button {
    --w: 2.75rem;
    --padding: 0.125rem;
    width: var(--w);
  }
  
  .thumb {
    --size: 1.25rem;
    width: var(--size);
    height: var(--size);
    transform: translateX(var(--padding));
  }
  
  :global([data-state='checked']) .thumb {
    transform: translateX(calc(var(--w) - var(--size) - var(--padding)));
  }
</style>