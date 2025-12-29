export function confirmarPresenca() {
  const nomeInput = document.getElementById('nome');
  const nome = nomeInput.value.trim();

  const presencaSelecionada =
      document.querySelector('input[name="presenca"]:checked');

  const msg = document.getElementById('rsvp-msg');

  if (!nome || !presencaSelecionada) {
    msg.innerText = '⚠️ Preencha o nome e selecione uma opção.';
    msg.classList.remove('hidden');
    return;
  }

  const presenca = presencaSelecionada.value;

  fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSew8AV0PVajZCnfESo4bFWcMZRGcua4KBM49M29JzwmWxI19w/formResponse',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `entry.447299125=${encodeURIComponent(nome)}` +
            `&entry.2136970471=${encodeURIComponent(presenca)}`
      });

  if (presenca === 'Sim') {
    msg.innerText = `🎉 Que alegria, ${nome}! Te esperamos 💍`;
  } else {
    msg.innerText = `💖 Obrigado por avisar, ${nome}!`;
  }

  msg.classList.remove('hidden');

  // Limpa formulário
  nomeInput.value = '';
  presencaSelecionada.checked = false;
}
