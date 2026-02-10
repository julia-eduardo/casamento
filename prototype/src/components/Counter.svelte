<script>
  import { onMount } from 'svelte';
  const DATA_EVENTO = new Date('2026-06-20T16:00:00');

  let dias = 0, horas = 0, minutos = 0, segundos = 0;

  function atualizar() {
    const now = new Date();
    const diff = DATA_EVENTO - now;
    if (diff <= 0) return;
    dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    minutos = Math.floor((diff / (1000 * 60)) % 60);
    segundos = Math.floor((diff / 1000) % 60);
  }

  let timer;
  onMount(() => {
    atualizar();
    timer = setInterval(atualizar, 1000);
    return () => clearInterval(timer);
  });
</script>

<div class="mt-6">
  <p class="script-light text-lg sm:text-xl mb-4 px-4" style="color: var(--color-accent);">Contagem regressiva para o grande dia</p>
  <div class="flex gap-2 sm:gap-4 justify-center flex-wrap px-2">
    <div class="bg-white rounded-xl p-3 sm:p-4 shadow-md border-2 border-pink-100 flex-1 min-w-[70px] max-w-[90px]">
      <div class="text-xl sm:text-2xl font-bold" style="color: var(--color-cta);">{dias}</div>
      <div class="text-xs text-muted uppercase">Dias</div>
    </div>
    <div class="bg-white rounded-xl p-3 sm:p-4 shadow-md border-2 border-pink-100 flex-1 min-w-[70px] max-w-[90px]">
      <div class="text-xl sm:text-2xl font-bold" style="color: var(--color-cta);">{horas}</div>
      <div class="text-xs text-muted uppercase">Horas</div>
    </div>
    <div class="bg-white rounded-xl p-3 sm:p-4 shadow-md border-2 border-pink-100 flex-1 min-w-[70px] max-w-[90px]">
      <div class="text-xl sm:text-2xl font-bold" style="color: var(--color-cta);">{minutos}</div>
      <div class="text-xs text-muted uppercase">Minutos</div>
    </div>
    <div class="bg-white rounded-xl p-3 sm:p-4 shadow-md border-2 border-pink-100 flex-1 min-w-[70px] max-w-[90px]">
      <div class="text-xl sm:text-2xl font-bold" style="color: var(--color-cta);">{segundos}</div>
      <div class="text-xs text-muted uppercase">Segundos</div>
    </div>
  </div>
</div>
