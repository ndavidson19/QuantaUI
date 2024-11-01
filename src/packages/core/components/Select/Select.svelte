<script lang="ts">
    import { Select } from 'bits-ui';
    import { cn } from '$utils/cn';
    import { Check, ChevronDown } from 'lucide-svelte';
    import type { SelectProps, SelectOption } from './types';
  
    export let items: SelectOption[] = [];
    export let placeholder = 'Select an option';
    export let disabled = false;
    export let required = false;
    export let name: string | undefined = undefined;
    export let error = false;
    export let size: SelectProps['size'] = 'md';
    export let variant: SelectProps['variant'] = 'default';
    export let fullWidth = false;
  
    $: containerClasses = cn(
      'relative inline-flex',
      {
        'w-full': fullWidth,
        'opacity-50 cursor-not-allowed': disabled
      }
    );
  
    $: triggerClasses = cn(
      'flex items-center justify-between rounded-md border transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      {
        'border-red-300 focus:ring-red-500': error,
        'border-gray-300 focus:ring-primary-500': !error,
        'bg-transparent': variant === 'ghost',
        'border-2': variant === 'outline',
        'py-1 px-2 text-sm': size === 'sm',
        'py-2 px-3 text-base': size === 'md',
        'py-3 px-4 text-lg': size === 'lg',
        'w-full': fullWidth
      }
    );
  
    $: contentClasses = cn(
      'bg-white rounded-md shadow-lg',
      'border border-gray-200',
      'max-h-[300px] overflow-y-auto'
    );
  
    $: itemClasses = cn(
      'relative flex items-center px-3 py-2',
      'text-sm text-gray-700 cursor-default select-none',
      'focus:outline-none focus:bg-primary-50',
      'data-[highlighted]:bg-primary-50',
      'data-[disabled]:opacity-50'
    );
  </script>
  
  <div class={containerClasses}>
    <Select.Root {items} {disabled} {required}>
      <Select.Trigger class={triggerClasses} aria-label={placeholder}>
        <Select.Value {placeholder} class="block truncate" />
        <ChevronDown class="ml-2 h-4 w-4 opacity-50" />
      </Select.Trigger>
  
      <Select.Content class={contentClasses}>
        {#each items as item}
          <Select.Item
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            class={itemClasses}
          >
            <div class="flex items-center">
              <span>{item.label}</span>
              <Select.ItemIndicator class="ml-auto">
                <Check class="h-4 w-4" />
              </Select.ItemIndicator>
            </div>
          </Select.Item>
        {/each}
      </Select.Content>
  
      <Select.Input {name} />
    </Select.Root>
  </div>
  