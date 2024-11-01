<script lang="ts">
    import { Menu } from 'lucide-svelte';
    import { writable } from 'svelte/store';
    import { onMount } from 'svelte';
  
    // Create a store for the active route
    const activeHash = writable('buttons');
  
    // Navigation items with hash routes
    const navigation = [
      { id: 'buttons', name: 'Buttons', href: '#buttons' },
      { id: 'cards' , name: 'Cards', href: '#cards' },
      { id: 'layouts', name: 'Layouts', href: '#layouts' },
      { id: 'select', name: 'Select', href: '#select' },
      { id: 'tags', name: 'Tags Input', href: '#tags' },
      { id: 'switch', name: 'Switch', href: '#switch' },
      { id: 'menu-bar', name: 'Menu Bar', href: '#menu-bar' },
      { id: 'forms', name: 'Forms', href: '#forms' },
      { id: 'tables', name: 'Tables', href: '#tables' },
      { id: 'charts', name: 'Charts', href: '#charts' },
    ];
  
    let isSidebarOpen = true;
    let currentComponent = '';
  
    // Handle navigation item clicks
    function handleNavClick(item: typeof navigation[0]) {
      activeHash.set(item.id);
      currentComponent = item.name;
      
      // Close sidebar on mobile after navigation
      if (window.innerWidth < 1024) {
        isSidebarOpen = false;
      }
    }
  
    // Listen for hash changes
    function handleHashChange() {
      const hash = window.location.hash.slice(1) || 'buttons';
      const currentItem = navigation.find(item => item.id === hash);
      if (currentItem) {
        activeHash.set(hash);
        currentComponent = currentItem.name;
      }
    }
  
    // Set initial active route and set up hash change listener
    onMount(() => {
      handleHashChange();
      window.addEventListener('hashchange', handleHashChange);
      
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    });
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
          {@const isActive = $activeHash === item.id}
          <a
            href={item.href}
            class="group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150
              {isActive
                ? 'bg-primary-50 text-primary-600'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}"
            on:click={() => handleNavClick(item)}
          >
            <span>{item.name}</span>
            {#if isActive}
              <span class="h-1.5 w-1.5 rounded-full bg-primary-600" />
            {/if}
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
        
        <!-- Current component name -->
        {#if currentComponent}
          <div class="flex-1 px-4 flex items-center">
            <h1 class="text-lg font-medium text-gray-900">
              {currentComponent}
            </h1>
          </div>
        {/if}
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