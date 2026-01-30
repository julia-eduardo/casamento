<script>
  import { createEventDispatcher } from 'svelte';
  export let titulo = '';
  export let qr = '';
  export let codigo = '';
  export let open = false;
  const dispatch = createEventDispatcher();

  function fechar() {
    open = false;
    dispatch('close');
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(codigo || '');
      dispatch('copied');
    } catch (e) {
      console.warn('Clipboard not available');
    }
  }
</script>

{#if open}
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50" on:click|self={fechar}>
    <div role="dialog" aria-modal="true" class="bg-white rounded-xl p-6 w-full max-w-sm">
      <button class="float-right text-xl" on:click={fechar}>✕</button>
      <h3 class="text-lg font-semibold">{titulo}</h3>
      <img src={qr} alt="QR Code" class="w-full mt-4" />
      <p class="mt-2 text-sm">Escaneie ou copie o código PIX:</p>
      <pre class="bg-gray-100 p-2 rounded mt-2 text-xs overflow-x-auto">{codigo}</pre>
      <button class="button mt-4 w-full" on:click={copiar}>📋 Copiar PIX</button>
    </div>
  </div>
{/if}
