<script lang="ts">
  import { Button } from '$core';
  import { ArrowRight, Mail, Plus, Settings } from 'lucide-svelte';
</script>

<div class="space-y-8">
  <div class="border-b border-gray-200 pb-5">
    <h2 class="text-3xl font-bold leading-6 text-gray-900">Buttons</h2>
    <p class="mt-2 max-w-4xl text-sm text-gray-500">
      Highly customizable button components with support for icons, loading states, and multiple variants.
    </p>
  </div>

    <!-- Standard Variants -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-xl font-semibold mb-4 text-gray-800">Button Variants</h3>
        <div class="flex flex-wrap gap-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="outline">Outline Button</Button>
        </div>
    </section>
    <!-- With Icons -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Buttons with Icons</h2>
        <div class="flex flex-wrap gap-4">
          <Button icon={ArrowRight} iconPosition="right">Continue</Button>
          <Button variant="secondary" icon={Mail}>Send Email</Button>
          <Button variant="ghost" icon={Settings}>Settings</Button>
          <Button variant="outline" icon={Plus}>Add New</Button>
        </div>
    </section>

     <!-- States -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Button States</h2>
        <div class="flex flex-wrap gap-4">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button variant="secondary" loading>Processing</Button>
          <Button variant="outline" disabled icon={Settings}>Settings</Button>
        </div>
    </section>

    <!-- Sizes -->
    <section class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Button Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <Button size="sm" icon={ArrowRight} iconPosition="right">Small</Button>
          <Button size="md" icon={ArrowRight} iconPosition="right">Medium</Button>
          <Button size="lg" icon={ArrowRight} iconPosition="right">Large</Button>
        </div>
    </section>
</div>