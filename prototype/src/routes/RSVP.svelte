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

<section class="py-8">
  <div class="container mx-auto px-4 max-w-xl">
    <h2 class="text-2xl mb-4">📝 Confirme sua presença</h2>

    <input bind:value={nome} placeholder="Ex: João e Maria" class="w-full p-3 rounded-lg border mb-4" />

    <div class="flex gap-4 mb-4">
      <label class="flex items-center gap-2"><input type="radio" bind:group={presenca} value="Sim 🎊"/> Vou comparecer 🎉</label>
      <label class="flex items-center gap-2"><input type="radio" bind:group={presenca} value="Não 🙁"/> Não poderei ir 😢</label>
    </div>

    <button class="button" on:click={enviar}>Enviar resposta 💍</button>

    {#if msg}
      <p class="mt-4">{msg}</p>
    {/if}
  </div>
</section>
