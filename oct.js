
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


const imagem = document.getElementById('maquedano');
let contadorCliques = 0;

// Guarda o caminho da imagem original que está no HTML
const imagemOriginal = imagem.src; 

imagem.addEventListener('click', () => {
    contadorCliques++;

    // 1. Efeito de clique: adiciona a classe de efeito
    imagem.classList.add('efeito-clique');
    
    // Remove a classe após 200 milissegundos para poder repetir o efeito no próximo clique
    setTimeout(() => {
        imagem.classList.remove('efeito-clique');
    }, 200);

    // 2. Lógica dos cliques
    if (contadorCliques === 12) {
        imagem.src = './imagens/Segredojpg.jpg'; // Substitua pelo caminho correto da imagem secreta
    } else if (contadorCliques > 12) {
        imagem.src = imagemOriginal;
        contadorCliques = 0; // Opcional: reinicia o contador para poder brincar de novo
    }
});