function abrirPix(img) {
  document.getElementById('pix-img').src = img;
  document.getElementById('modal').style.display = 'block';
}

function fecharPix() {
  document.getElementById('modal').style.display = 'none';
}
