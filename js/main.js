import './countdown.js';

import {carregarPresentes} from './render.js';
import {confirmarPresenca} from './rsvp.js';

document.addEventListener('DOMContentLoaded', () => {
  carregarPresentes();

  const rsvpBtn = document.getElementById('rsvp-enviar');
  if (rsvpBtn) rsvpBtn.addEventListener('click', confirmarPresenca);
});
