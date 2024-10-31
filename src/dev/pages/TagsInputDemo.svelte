<script lang="ts">
  import { TagsInput } from '$core';

  let demoTags: string[] = [];
  let limitedTags: string[] = [];
</script>

<div class="space-y-8">
  <!-- Header -->
  <div class="border-b border-gray-200 pb-5">
    <h1 class="text-3xl font-bold text-gray-900">Tags Input</h1>
    <p class="mt-2 text-sm text-gray-500">
      A flexible tags input component with support for keyboard navigation, editing, and deletion.
    </p>
  </div>

  <!-- Basic Usage -->
  <section id="basic-usage" class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">Basic Usage</h2>
    <div class="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <TagsInput
        defaultTags={['Svelte', 'TypeScript', 'TailwindCSS']}
        placeholder="Add technologies..."
        onTagsChange={(tags) => (demoTags = tags)}
      />
      <div class="text-sm text-gray-500 space-y-2">
        <p>Current tags: {demoTags.join(', ')}</p>
        <ul class="list-disc list-inside space-y-1">
          <li>Press Enter to add a tag</li>
          <li>Click × to remove a tag</li>
          <li>Click a tag to edit it</li>
          <li>Use arrow keys to navigate</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- With Limits -->
  <section id="with-limits" class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">With Limits</h2>
    <div class="bg-white p-6 rounded-lg shadow-sm space-y-4">
      <TagsInput
        maxTags={3}
        placeholder="Add up to 3 tags..."
        onTagsChange={(tags) => (limitedTags = tags)}
      />
      <p class="text-sm text-gray-500">
        {limitedTags.length}/3 tags used
      </p>
    </div>
  </section>

  <!-- States -->
  <section id="states" class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">States</h2>
    <div class="bg-white p-6 rounded-lg shadow-sm grid gap-6">
      <!-- Disabled -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium text-gray-700">Disabled</h3>
        <TagsInput
          defaultTags={['Disabled', 'State']}
          disabled
        />
      </div>

      <!-- Empty -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium text-gray-700">Empty</h3>
        <TagsInput
          placeholder="Start typing..."
        />
      </div>
    </div>
  </section>

  <!-- Keyboard Controls -->
  <section id="keyboard-controls" class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">Keyboard Controls</h2>
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="space-y-2">
          <div class="font-medium text-gray-900">Navigation</div>
          <ul class="space-y-1 text-gray-500">
            <li>← / → : Navigate tags</li>
            <li>Backspace : Edit last tag</li>
            <li>Delete : Remove selected</li>
          </ul>
        </div>
        <div class="space-y-2">
          <div class="font-medium text-gray-900">Editing</div>
          <ul class="space-y-1 text-gray-500">
            <li>Enter : Add new tag</li>
            <li>Double click : Edit tag</li>
            <li>Escape : Cancel edit</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>