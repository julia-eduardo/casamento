export function abrirPix(presente) {
  document.getElementById('modal-titulo').innerText =
      `${presente.emoji} ${presente.nome}`;

  document.getElementById('pix-img').src = presente.qrCode;
  document.getElementById('pix-code').innerText = presente.pixCopiaCola;

  document.getElementById('modal').classList.remove('hidden');
}

export function fecharPix() {
  document.getElementById('modal').classList.add('hidden');
}

export function copiarPix() {
  const code = document.getElementById('pix-code').innerText;
  navigator.clipboard.writeText(code);

  const toast = document.getElementById('toast');
  toast.classList.remove('hidden');

  setTimeout(() => toast.classList.add('hidden'), 2000);
}

// Registra event listeners para os controles da modal quando o DOM estiver
// pronto Também adiciona melhorias: fechar ao clicar fora e ao pressionar
// Escape.
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');
  const copyBtn = document.getElementById('modal-copy');

  if (closeBtn) closeBtn.addEventListener('click', fecharPix);
  if (copyBtn) copyBtn.addEventListener('click', copiarPix);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) fecharPix();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharPix();
  });
});
