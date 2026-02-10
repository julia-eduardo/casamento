<script>
  import { createEventDispatcher, tick } from 'svelte';
  export let titulo = '';
  export let qr = '';
  export let codigo = '';
  export let open = false;
  const dispatch = createEventDispatcher();

  let closeBtn;
  let previousActiveElement = null;

  $: if (open) {
    // guarda elemento ativo antes de abrir e foca no botão fechar
    previousActiveElement = document.activeElement;
    tick().then(() => {
      if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
    });
  } else {
    // restaura foco quando fechar
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

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

  function handleKeyDown(e) {
    if (e.key === 'Escape' && open) fechar();
  }
</script> 

<svelte:window on:keydown={handleKeyDown} />

{#if open}

  <div 
    class="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" 
    on:click|self={fechar}
    role="presentation"
  >
    <div role="dialog" aria-modal="true" class="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl border-4 border-pink-100" style="background: linear-gradient(to bottom, #FEF7EE, #FFFFFF); max-height: 90vh; overflow-y: auto;">
      <button 
        class="float-right text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-pink-100 transition-colors" 
        on:click={fechar} 
        bind:this={closeBtn}
        style="color: var(--color-cta-2);"
      >✕</button>
      <h3 class="text-2xl sm:text-3xl mb-4 sm:mb-6 pr-8" style="color: var(--color-cta-2); font-family: 'Dancing Script', cursive;">{titulo}</h3>
      <div class="bg-white p-2 sm:p-3 rounded-xl shadow-md border-2 border-pink-50">
        <img src={qr} alt="QR Code" class="w-full rounded-lg" />
      </div>
      <p class="mt-4 sm:mt-6 text-xs sm:text-sm text-center" style="color: var(--color-title);">Escaneie o QR Code ou copie o código PIX:</p>
      <pre class="bg-pink-50 p-2 sm:p-3 rounded-xl mt-3 text-xs overflow-x-auto border-2 border-pink-100">{codigo}</pre>
      <button class="button mt-4 sm:mt-6 w-full" on:click={copiar}>📋 Copiar código PIX</button>
    </div>
  </div>
{/if}
