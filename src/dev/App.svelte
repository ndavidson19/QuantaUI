<script lang="ts">
  import MainLayout from './layouts/MainLayout.svelte';
  import ButtonDemo from './pages/ButtonDemo.svelte';
  import TagsDemo from './pages/TagsInputDemo.svelte';
  import SwitchDemo from './pages/SwitchDemo.svelte';
  import SelectDemo from './pages/SelectDemo.svelte';
  import MenuBarDemo from './pages/MenuBarDemo.svelte';
  import CardDemo from './pages/CardDemo.svelte';
  import LayoutDemo from './pages/LayoutDemo.svelte';
  import FormDemo from './pages/FormDemo.svelte';

  // Simple hash-based routing
  let currentHash = '';

  function handleHashChange() {
    currentHash = window.location.hash || '#buttons';
  }

  // Listen for hash changes
  if (typeof window !== 'undefined') {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
  }
</script>

<MainLayout>
  {#if currentHash === '#buttons'}
    <ButtonDemo />
  {:else if currentHash === '#tags'}
    <TagsDemo />
  {:else if currentHash === '#switch'}
    <SwitchDemo />
  {:else if currentHash === '#select'}
    <SelectDemo />
 {:else if currentHash === '#cards'}
    <CardDemo />
  {:else if currentHash === '#menu-bar'}
    <MenuBarDemo />
    {:else if currentHash === '#layouts'}
    <LayoutDemo />
    {:else if currentHash === '#forms'}
    <FormDemo />
  {/if}
</MainLayout>