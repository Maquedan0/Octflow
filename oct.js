
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


const imagem = document.getElementById('minha-imagem');
let contadorCliques = 0;


imagem.addEventListener('click', () => {
    contadorCliques++;
    
    
    if (contadorCliques === 12) {
        imagem.src = '';
        
        // Opcional: adiciona uma classe caso queira aplicar algum efeito CSS novo
        imagem.classList.add('transformada'); 
    }
});