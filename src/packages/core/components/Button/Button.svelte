<script lang="ts">
  import { Button } from "bits-ui";
  import { cn } from '$utils/cn';
  import type { IconType } from 'lucide-svelte';

  type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  type ButtonSize = 'sm' | 'md' | 'lg';

  interface $$Props {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    class?: string;
    fullWidth?: boolean;
    icon?: IconType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
  }

  export let variant: $$Props['variant'] = 'primary';
  export let size: $$Props['size'] = 'md';
  export let disabled: $$Props['disabled'] = false;
  export let fullWidth: $$Props['fullWidth'] = false;
  export let icon: $$Props['icon'] = undefined;
  export let iconPosition: $$Props['iconPosition'] = 'left';
  export let loading: $$Props['loading'] = false;
  let className: $$Props['class'] = undefined;
  export { className as class };

  const variantStyles = {
    primary: 'bg-primary-500 text-white shadow-sm hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 active:translate-y-px',
    secondary: 'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px',
    danger: 'bg-red-500 text-white shadow-sm hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:translate-y-px',
    ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px',
    outline: 'border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px'
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-10 px-4 text-sm rounded-lg',
    lg: 'h-12 px-6 text-base rounded-lg'
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5'
  };

  $: classList = cn(
    // Base styles
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'select-none',
    // Size variations
    sizeStyles[size],
    // Variant styles
    variantStyles[variant],
    // Width
    fullWidth && 'w-full',
    // Disabled state
    (disabled || loading) && 'opacity-50 cursor-not-allowed pointer-events-none',
    // Gap for icons
    (icon || loading) && 'gap-2',
    // Custom classes
    className
  );

  $: iconClasses = cn(
    'transition-transform duration-200',
    iconSizes[size],
    loading && 'animate-spin'
  );
</script>

<Button.Root
  {disabled}
  class={classList}
  {...$$restProps}
>
  {#if loading}
    <svg
      class={iconClasses}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  {:else if icon && iconPosition === 'left'}
    <svelte:component this={icon} class={iconClasses} />
  {/if}
  
  <slot />
  
  {#if icon && iconPosition === 'right'}
    <svelte:component this={icon} class={iconClasses} />
  {/if}
</Button.Root>