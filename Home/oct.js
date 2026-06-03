
const titulo = document.querySelector('.efeito-letras');


titulo.innerHTML = titulo.textContent
  .split('')
  .map(letra => {
    
    return letra === ' ' ? ' ' : `<span>${letra}</span>`;
  })
  .join('');