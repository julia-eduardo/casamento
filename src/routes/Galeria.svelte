<section class="py-6 sm:py-8">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl sm:text-4xl mb-4 sm:mb-6 text-center" style="color: var(--color-section);">Nossa Galeria</h2>
    <p class="text-center mb-6 sm:mb-8 text-muted text-sm sm:text-base">Momentos especiais capturados 📸</p>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 auto-rows-[180px]">
      <!-- editorial-like varied sizes -->
      {#each Array(8) as _, i}
        <div class="bg-white rounded-lg overflow-hidden">
          {#if i % 5 === 0}
            <div class="w-full h-full bg-gray-100 flex items-center justify-center">Large</div>
          {:else if i % 3 === 0}
            <div class="w-full h-full bg-gray-100 flex items-center justify-center">Tall</div>
          {:else}
            <div class="w-full h-full bg-gray-100 flex items-center justify-center">Placeholder</div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
