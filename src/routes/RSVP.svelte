<script>
  let nome = '';
  let presenca = '';
  let msg = '';

  function enviar() {
    if (!nome || !presenca) {
      msg = '⚠️ Preencha o nome e selecione uma opção.';
      return;
    }

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSew8AV0PVajZCnfESo4bFWcMZRGcua4KBM49M29JzwmWxI19w/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `entry.447299125=${encodeURIComponent(nome)}&entry.2136970471=${encodeURIComponent(presenca)}&submit=Submit`
    });

    if (presenca.includes('Sim')) msg = `🎉 Que alegria, ${nome}! Te esperamos 💍`;
    else msg = `💖 Obrigado por avisar, ${nome}!`;

    nome = '';
    presenca = '';
  }
</script>

<section class="py-6 sm:py-8">
  <div class="container mx-auto px-4 max-w-xl">
    <h2 class="text-3xl sm:text-4xl mb-4 sm:mb-6 text-center" style="color: var(--color-cta-2);">Confirme sua presença</h2>
    <p class="text-center mb-6 sm:mb-8 text-muted text-sm sm:text-base">Sua presença é muito importante para nós! 💖</p>

    <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-pink-100">
      <input 
        bind:value={nome} 
        placeholder="Ex: João e Maria" 
        class="w-full p-3 sm:p-4 rounded-xl border-2 border-pink-100 mb-4 sm:mb-6 focus:border-pink-300 focus:outline-none transition-colors text-sm sm:text-base" 
      />

      <div class="flex flex-col gap-3 mb-4 sm:mb-6">
        <label class="flex items-center gap-3 p-3 sm:p-4 rounded-xl border-2 border-pink-100 cursor-pointer hover:bg-pink-50 transition-colors">
          <input type="radio" bind:group={presenca} value="Sim 🎊" class="w-4 h-4 sm:w-5 sm:h-5"/>
          <span class="text-base sm:text-lg">Vou comparecer 🎉</span>
        </label>
        <label class="flex items-center gap-3 p-3 sm:p-4 rounded-xl border-2 border-pink-100 cursor-pointer hover:bg-pink-50 transition-colors">
          <input type="radio" bind:group={presenca} value="Não 🙁" class="w-4 h-4 sm:w-5 sm:h-5"/>
          <span class="text-base sm:text-lg">Não poderei ir 😢</span>
        </label>
      </div>

      <button class="button w-full" on:click={enviar}>Enviar resposta 💍</button>

      {#if msg}
        <p class="mt-6 text-center p-4 bg-pink-50 rounded-xl border-2 border-pink-100">{msg}</p>
      {/if}
    </div>
  </div>
</section>
