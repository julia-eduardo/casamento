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

<section class="py-8">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl mb-4">🎁 Lista de Presentes</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each presentes.filter(p=>p.ativo).sort((a,b)=>a.ordem-b.ordem) as p }
        <div class="bg-white p-4 rounded-lg shadow">
          <div class="text-2xl">{p.emoji} {p.nome}</div>
          <div class="text-sm mt-2 text-muted">{p.descricao}</div>
          <div class="font-semibold mt-4">R$ {p.valor}</div>
          <button class="button mt-4" on:click={()=>abrir(p)}>Presentear</button>
        </div>
      {/each}
    </div>
  </div>

  <ModalPix titulo={active?.nome} qr={active?.qrCode} codigo={active?.pixCopiaCola} bind:open={modalOpen} on:close={fechar} />
</section>
