<script>
  import presentes from '../data/presentes.json';
  import ModalPix from '../components/ModalPix.svelte';

  let modalOpen = false;
  let active = null;

  function abrir(p) {
    active = p;
    modalOpen = true;
  }

  function fechar() {
    modalOpen = false;
    active = null;
  }
</script>

<section class="py-6 sm:py-8">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl sm:text-4xl mb-4 sm:mb-6 text-center" style="color: var(--color-cta);">Lista de Presentes</h2>
    <p class="text-center mb-6 sm:mb-8 text-muted text-sm sm:text-base">Escolha um presente especial para nós 🎁</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {#each presentes.filter(p=>p.ativo).sort((a,b)=>a.ordem-b.ordem) as p }
        <div class="bg-white p-0 rounded-lg shadow">
          <div class="card-image h-56" >
            <button
              class="w-full h-full flex items-stretch"
              aria-label={"Presentear " + p.nome}
              on:click={() => abrir(p)}
            >
              {#if p.imagem}
                <img src={p.imagem} alt={p.nome} class="w-full h-full object-cover" />
              {:else}
                <div class="w-full h-full flex items-center justify-center text-5xl">{p.emoji}</div>
              {/if}
            </button>

            <div class="card-overlay">
              <div class="flex items-center justify-between">
                <div>
                  <div class="card-title">{p.nome}</div>
                  <div class="card-price">R$ {p.valor}</div>
                </div>
                <div>
                  <button class="button secondary" style="padding: 0.5rem 1rem; font-size: 0.875rem;">Presentear</button>
                </div>
              </div>
            </div>
          </div>

          <div class="p-4">
            <div class="text-sm mt-2 text-muted">{p.descricao}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <ModalPix titulo={active?.nome} qr={active?.qrCode} codigo={active?.pixCopiaCola} bind:open={modalOpen} on:close={fechar} />
</section>
