import {abrirPix} from './modal.js';

export async function carregarPresentes() {
  const res = await fetch('data/presentes.json');
  const presentes = await res.json();

  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  presentes.filter(p => p.ativo)
      .sort((a, b) => a.ordem - b.ordem)
      .forEach(p => {
        const card = document.createElement('div');
        card.className = 'presente';

        card.innerHTML = `
        <h2>${p.emoji} ${p.nome}</h2>
        <p>${p.descricao}</p>
        <span>R$ ${p.valor}</span>
        <button>Presentear</button>
      `;

        card.querySelector('button').onclick = () => abrirPix(p);
        lista.appendChild(card);
      });
}
