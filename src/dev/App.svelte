<script lang="ts">
  import MainLayout from './layouts/MainLayout.svelte';
  import ButtonDemo from './pages/ButtonDemo.svelte';
  import TagsDemo from './pages/TagsInputDemo.svelte';
  import SwitchDemo from './pages/SwitchDemo.svelte';

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
  {/if}
</MainLayout>