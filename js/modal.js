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
