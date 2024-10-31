<script lang="ts">
  import { Menu } from 'lucide-svelte';

  // Navigation items
  const navigation = [
    { name: 'Buttons', href: '#buttons', current: true },
    { name: 'Tags Input', href: '#tags', current: false },
    { name: 'Switch', href: '#switch', current: false },
    { name: 'Forms', href: '#forms', current: false },
    { name: 'Tables', href: '#tables', current: false },
    { name: 'Charts', href: '#charts', current: false },
  ];

  let isSidebarOpen = true;
</script>

<div class="h-screen flex overflow-hidden bg-gray-100">
  <!-- Sidebar -->
  <div
    class={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-200 ease-in-out ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:relative lg:translate-x-0`}
  >
    <!-- Logo -->
    <div class="flex h-16 items-center justify-between px-4 border-b border-gray-200">
      <span class="text-lg font-semibold text-primary-600">Quanta UI</span>
      <button
        class="lg:hidden text-gray-500 hover:text-gray-700"
        on:click={() => (isSidebarOpen = false)}
      >
        <span class="sr-only">Close sidebar</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="mt-4 px-2 space-y-1">
      {#each navigation as item}
        <a
          href={item.href}
          class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 {item.current ? 'bg-primary-50 text-primary-600' : ''}"
        >
          {item.name}
        </a>
      {/each}
    </nav>
  </div>

  <!-- Main content area -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- Top bar -->
    <div class="sticky top-0 z-10 flex h-16 bg-white shadow-sm">
      <button
        type="button"
        class="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
        on:click={() => (isSidebarOpen = true)}
      >
        <span class="sr-only">Open sidebar</span>
        <Menu class="h-6 w-6" />
      </button>
    </div>

    <!-- Main content -->
    <main class="flex-1 overflow-y-auto">
      <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </div>
    </main>
  </div>
</div>