
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


    imagem.classList.add('efeito-clique');
    

    setTimeout(() => {
        imagem.classList.remove('efeito-clique');
    }, 200);


    if (contadorCliques === 12) {
        imagem.src = './imagens/Segredojpg.jpg'; // Substitua pelo caminho correto da imagem secreta
    } else if (contadorCliques > 12) {
        imagem.src = imagemOriginal;
        contadorCliques = 0; // Opcional: reinicia o contador para poder brincar de novo
    }
});

const container = document.getElementById('meuContainer');
const img = document.getElementById('minhaImagem');

const imgNormal = './imagem-equipe/Camilly.PNG';
const imgPressionada = './imagens/Segredo2.jpg';

// 1. Pressionou o mouse
container.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Evita comportamentos estranhos de seleção
    img.src = imgPressionada;
});

// 2. Solto o mouse DENTRO do container
container.addEventListener('mouseup', () => {
    img.src = imgNormal;
});

// 3. O mouse saiu do container (enquanto pressionado ou não)
// Isso conserta o caso de "arrastar para fora e soltar"
container.addEventListener('mouseleave', () => {
    img.src = imgNormal;
});

// 4. Previne que a imagem seja arrastada pelo navegador (bug comum)
img.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

window.addEventListener('mouseup', () => {
    img.src = imgNormal;
});

// Código para o efeito de clique na imagem da Samuel


const containerS = document.getElementById('meuContainerS');
const imgS = document.getElementById('minhaImagemS');

const imgNormalS = './imagem-equipe/Samuel.PNG';
const imgPressionadaS = './imagens/Segredo3.webp';

// 1. Pressionou o mouse
containerS.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Evita comportamentos estranhos de seleção
    imgS.src = imgPressionadaS;
}); 

// 2. Solto o mouse DENTRO do container
containerS.addEventListener('mouseup', () => {
    imgS.src = imgNormalS;
});

// 3. O mouse saiu do container (enquanto pressionado ou não)
// Isso conserta o caso de "arrastar para fora e soltar"
containerS.addEventListener('mouseleave', () => {
    imgS.src = imgNormalS;
});

// 4. Previne que a imagem seja arrastada pelo navegador (bug comum)
imgS.addEventListener('dragstart', (e) => {
    e.preventDefault();
});

window.addEventListener('mouseup', () => {
    imgS.src = imgNormalS;
});