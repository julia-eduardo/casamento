<script>
  import Counter from '../components/Counter.svelte'
</script>

<section class="py-12">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl mb-4">🎉 Nosso grande dia</h1>
    <p class="mb-6 text-muted">15 de maio de 2026 — Connect Vila Sônia</p>

    <Counter />

    <div class="mt-8 flex gap-4 justify-center">
      <a href="#presentes" class="button">Ver Presentes</a>
      <a href="#rsvp" class="button bg-rose">Confirmar presença</a>
    </div>
  </div>
</section>
