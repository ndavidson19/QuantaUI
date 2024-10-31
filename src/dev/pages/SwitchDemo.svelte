<script lang="ts">
  import { Switch } from '$core';
</script>

<div class="space-y-8">
  <!-- Header -->
  <div class="border-b border-gray-200 pb-5">
    <h1 class="text-3xl font-bold text-gray-900">Switch</h1>
    <p class="mt-2 text-sm text-gray-500">
      Toggle controls with smooth transitions.
    </p>
  </div>

  <!-- Basic Examples -->
  <section class="space-y-4">
    <h2 class="text-xl font-semibold text-gray-900">Basic Usage</h2>
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <div class="space-y-6">
        <!-- Basic -->
        <Switch label="Notifications" />
        
        <!-- With long label -->
        <Switch label="Enable push notifications for updates and alerts" />
        
        <!-- Disabled -->
        <Switch label="Disabled switch" disabled />
        
        <!-- Initially checked and disabled -->
        <Switch label="Checked disabled" disabled />
      </div>
    </div>
  </section>
</div>