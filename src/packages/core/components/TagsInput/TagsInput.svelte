<script lang="ts">
  import { createTagsInput, melt } from '@melt-ui/svelte';
  import { X } from 'lucide-svelte';

  interface $$Props {
    defaultTags?: string[];
    placeholder?: string;
    disabled?: boolean;
    class?: string;
  }

  export let defaultTags: $$Props['defaultTags'] = [];
  export let placeholder: $$Props['placeholder'] = 'Enter tags...';
  export let disabled: $$Props['disabled'] = false;
  let className: $$Props['class'] = undefined;
  export { className as class };

  const {
    elements: { root, input, tag, deleteTrigger, edit },
    states: { tags },
  } = createTagsInput({
    defaultTags,
    disabled,
    unique: true,
    add(tag) {
      return { id: tag, value: tag };
    },
    addOnPaste: true,
  });
</script>

<div class="flex flex-col items-start justify-center gap-2">
  <div
    use:melt={$root}
    class="flex min-w-[280px] flex-row flex-wrap gap-2.5 rounded-lg border border-gray-200
           bg-white px-3 py-2 text-gray-700 focus-within:ring-2 focus-within:ring-primary-500
           focus-within:ring-offset-2 {className}"
  >
    {#each $tags as t}
      <div
        use:melt={$tag(t)}
        class="flex items-center overflow-hidden rounded-md bg-primary-100 text-primary-900
               data-[disabled]:bg-gray-100 data-[selected]:bg-primary-200
               data-[disabled]:hover:cursor-not-allowed
               data-[disabled]:focus:!outline-none data-[disabled]:focus:!ring-0
               [word-break:break-word]"
      >
        <span class="flex items-center border-r border-primary-200/50 px-1.5">
          {t.value}
        </span>
        <button
          use:melt={$deleteTrigger(t)}
          class="flex h-full items-center px-1.5 enabled:hover:bg-primary-200/50"
        >
          <X class="h-3 w-3" />
        </button>
      </div>
      <div
        use:melt={$edit(t)}
        class="flex items-center overflow-hidden rounded-md px-1.5
               [word-break:break-word] data-[invalid-edit]:focus:!ring-red-500"
      />
    {/each}
    <input
      use:melt={$input}
      type="text"
      {placeholder}
      class="min-w-[4.5rem] flex-1 border-0 bg-transparent p-0.5 text-sm
             outline-none focus:ring-0 data-[invalid]:text-red-500"
    />
  </div>
</div>