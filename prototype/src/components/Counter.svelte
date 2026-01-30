<script>
  import { onMount } from 'svelte';
  const DATA_EVENTO = new Date('2026-05-15T16:00:00');

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

<div class="flex gap-4 justify-center mt-4">
  <div class="bg-white rounded-lg p-4 shadow">
    <div class="text-lg font-semibold">{dias}</div>
    <div class="text-xs text-muted">Dias</div>
  </div>
  <div class="bg-white rounded-lg p-4 shadow">
    <div class="text-lg font-semibold">{horas}</div>
    <div class="text-xs text-muted">Horas</div>
  </div>
  <div class="bg-white rounded-lg p-4 shadow">
    <div class="text-lg font-semibold">{minutos}</div>
    <div class="text-xs text-muted">Minutos</div>
  </div>
  <div class="bg-white rounded-lg p-4 shadow">
    <div class="text-lg font-semibold">{segundos}</div>
    <div class="text-xs text-muted">Segundos</div>
  </div>
</div>
