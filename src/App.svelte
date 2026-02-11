<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './routes/Home.svelte';
  import Presentes from './routes/Presentes.svelte';
  import RSVP from './routes/RSVP.svelte';
  import Local from './routes/Local.svelte';

  let route = 'home';

  function updateRoute() {
    route = location.hash.replace('#','') || 'home';
  }

  onMount(() => {
    updateRoute();
    window.addEventListener('hashchange', updateRoute);
  });
</script>

<Header />
<main class="container mx-auto p-6" style="padding-top: var(--header-height);">
  {#if route === 'home'}
    <Home />
  {:else if route === 'presentes'}
    <Presentes />
  {:else if route === 'rsvp'}
    <RSVP />
  {:else if route === 'local'}
    <Local />
  {/if}
</main>
<Footer />
