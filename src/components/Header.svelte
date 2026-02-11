<script>
  let menuOpen = false;
  
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
  
  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class="fixed top-0 left-0 w-full z-40 backdrop-blur-md" style="height: var(--header-height); background: rgba(254, 247, 238, 0.95);">
  <div class="container mx-auto flex items-center justify-between px-4" style="height: var(--header-height);">
    <a href="#home" class="flex items-center gap-2" on:click={closeMenu}>
      <div class="logo-text" style="font-size: clamp(1.5rem, 5vw, 2rem);">J&E</div>
    </a>

    <!-- Menu Desktop -->
    <nav class="hidden md:flex gap-6 items-center text-sm">
      <a href="#home" class="hover:underline">Home</a>
      <a href="#presentes" class="hover:underline">Presentes</a>
      <a href="#rsvp" class="hover:underline">RSVP</a>
      <a href="#local" class="hover:underline">Local</a>
      <a href="#fotos" class="hover:underline">Fotos do evento</a>
    </nav>

    <!-- Botão CTA Desktop -->
    <div class="hidden md:flex items-center gap-3">
      <a href="#presentes" class="button">Presentes</a>
    </div>

    <!-- Botão Hamburger Mobile -->
    <button 
      class="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center" 
      on:click={toggleMenu}
      aria-label="Menu"
    >
      <span class="w-6 h-0.5 bg-current transition-transform" class:rotate-45={menuOpen} class:translate-y-2={menuOpen} style="color: var(--color-cta);"></span>
      <span class="w-6 h-0.5 bg-current transition-opacity" class:opacity-0={menuOpen} style="color: var(--color-cta);"></span>
      <span class="w-6 h-0.5 bg-current transition-transform" class:-rotate-45={menuOpen} class:-translate-y-2={menuOpen} style="color: var(--color-cta);"></span>
    </button>
  </div>

  <!-- Menu Mobile Dropdown -->
  {#if menuOpen}
    <div class="md:hidden absolute top-full left-0 w-full shadow-lg" style="background: rgba(254, 247, 238, 0.98); backdrop-filter: blur(10px);">
      <nav class="container mx-auto px-4 py-4 flex flex-col gap-3">
        <a href="#home" class="py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors" on:click={closeMenu}>🏠 Home</a>
        <a href="#presentes" class="py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors" on:click={closeMenu}>🎁 Presentes</a>
        <a href="#rsvp" class="py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors" on:click={closeMenu}>📝 Confirmar Presença</a>
        <a href="#local" class="py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors" on:click={closeMenu}>📍 Local</a>
        <a href="#fotos" class="py-3 px-4 rounded-lg hover:bg-pink-50 transition-colors" on:click={closeMenu}>📸 Fotos do evento</a>
      </nav>
    </div>
  {/if}
</header>
