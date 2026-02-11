<script>
  import Counter from '../components/Counter.svelte'
  import Sobre from './Sobre.svelte'
</script>

<!-- Hero editorial full-bleed -->
<section class="hero" style="margin-top: calc(-1 * var(--header-height));">
  <picture>
    <source srcset="assets/header/topo.png" type="image/png" />
    <img src="assets/header/topo.png" alt="Hero" />
  </picture>
  <div class="overlay">
    <div class="hero-inner">
      <!-- Intencionalmente vazio para manter imagem sem texto sobreposto -->
    </div>
  </div>
</section>

<!-- Convite: mensagem, data e contagem -->
<section class="convite py-6 sm:py-8">
  <div class="container mx-auto px-4 text-center max-w-3xl">
    <p class="script-light text-xl sm:text-2xl mb-2" style="color: var(--color-section);">A união de</p>
    <h2 style="font-size: clamp(2rem, 8vw, 3rem);">Julia & Eduardo</h2>
    <p class="sub mb-4 text-base sm:text-lg">Venha comemorar conosco no dia mais especial de nossas vidas!</p>
    <p class="text-base sm:text-lg font-semibold mb-1">20 de junho de 2026</p>

    <div class="mt-6 sm:mt-8">
      <Counter />
    </div>
  </div>
</section>

<Sobre />
