<script lang="ts">
    import { Select } from '$core';
    import { Users, Calendar, Tag, Globe } from 'lucide-svelte';
  
    const basicOptions = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
      { value: 'grape', label: 'Grape' }
    ];
  
    const userOptions = [
      { value: 'john', label: 'John Doe' },
      { value: 'jane', label: 'Jane Smith' },
      { value: 'bob', label: 'Bob Johnson' },
      { value: 'alice', label: 'Alice Brown' }
    ];
  
    const statusOptions = [
      { value: 'active', label: 'Active' },
      { value: 'inactive', label: 'Inactive' },
      { value: 'pending', label: 'Pending' },
      { value: 'archived', label: 'Archived' }
    ];
  
    const languageOptions = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' }
    ];
  </script>
  
  <div class="space-y-8">
    <div class="border-b border-gray-200 pb-5">
      <h2 class="text-3xl font-bold leading-6 text-gray-900">Select</h2>
      <p class="mt-2 max-w-4xl text-sm text-gray-500">
        Accessible select components with support for custom styling, error states, and multiple variants.
      </p>
    </div>
  
    <!-- Standard Variants -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Select Variants</h3>
      <div class="flex flex-wrap gap-4">
        <Select
          items={basicOptions}
          placeholder="Default variant"
        />
        <Select
          items={basicOptions}
          placeholder="Ghost variant"
          variant="ghost"
        />
        <Select
          items={basicOptions}
          placeholder="Outline variant"
          variant="outline"
        />
      </div>
    </section>
  
    <!-- With Icons -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Select with Context</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center gap-2">
          <Users class="h-5 w-5 text-gray-400" />
          <Select
            items={userOptions}
            placeholder="Select user"
            class="flex-1"
          />
        </div>
        <div class="flex items-center gap-2">
          <Tag class="h-5 w-5 text-gray-400" />
          <Select
            items={statusOptions}
            placeholder="Select status"
            class="flex-1"
          />
        </div>
        <div class="flex items-center gap-2">
          <Calendar class="h-5 w-5 text-gray-400" />
          <Select
            items={basicOptions}
            placeholder="Select category"
            class="flex-1"
          />
        </div>
        <div class="flex items-center gap-2">
          <Globe class="h-5 w-5 text-gray-400" />
          <Select
            items={languageOptions}
            placeholder="Select language"
            class="flex-1"
          />
        </div>
      </div>
    </section>
  
    <!-- States -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Select States</h3>
      <div class="flex flex-wrap gap-4">
        <Select
          items={basicOptions}
          placeholder="Normal state"
        />
        <Select
          items={basicOptions}
          placeholder="Disabled state"
          disabled
        />
        <Select
          items={basicOptions}
          placeholder="Error state"
          error
        />
        <Select
          items={basicOptions.map(opt => ({ ...opt, disabled: opt.value === 'banana' }))}
          placeholder="Disabled options"
        />
      </div>
    </section>
  
    <!-- Sizes -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Select Sizes</h3>
      <div class="flex flex-wrap items-center gap-4">
        <Select
          items={basicOptions}
          placeholder="Small size"
          size="sm"
        />
        <Select
          items={basicOptions}
          placeholder="Medium size"
          size="md"
        />
        <Select
          items={basicOptions}
          placeholder="Large size"
          size="lg"
        />
      </div>
    </section>
  
    <!-- Full Width -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Full Width Select</h3>
      <div class="space-y-4">
        <Select
          items={basicOptions}
          placeholder="Full width select"
          fullWidth
        />
        <Select
          items={basicOptions}
          placeholder="Full width with error"
          fullWidth
          error
        />
      </div>
    </section>
  
    <!-- Form Integration -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Form Integration</h3>
      <form class="max-w-md space-y-4" on:submit|preventDefault>
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-700" for="required-select">
            Required Select
          </label>
          <Select
            items={basicOptions}
            placeholder="Required field"
            required
            name="required-select"
          />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-gray-700" for="optional-select">
            Optional Select
          </label>
          <Select
            items={basicOptions}
            placeholder="Optional field"
            name="optional-select"
          />
        </div>
      </form>
    </section>
  </div>