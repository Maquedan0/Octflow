
const titulos = document.querySelectorAll('.efeito-letras');

titulos.forEach(titulo => {
  const textoOriginal = titulo.textContent;
  titulo.innerHTML = ''; 
  
  const letras = textoOriginal.split('');
  
  letras.forEach(letra => {
    const span = document.createElement('span');
    span.textContent = letra === ' ' ? '\u00A0' : letra; 
    titulo.appendChild(span);
  });
});