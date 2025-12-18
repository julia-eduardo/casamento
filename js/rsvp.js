export function confirmarPresenca() {
  const nome = document.getElementById('nome').value;
  if (!nome) return;

  fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSew8AV0PVajZCnfESo4bFWcMZRGcua4KBM49M29JzwmWxI19w/formResponse',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `entry.447299125=${encodeURIComponent(nome)}`
      });

  document.getElementById('rsvp-msg').classList.remove('hidden');
  document.getElementById('nome').value = '';
}
