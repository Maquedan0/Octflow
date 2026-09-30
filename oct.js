
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
const imgPressionadaS = './imagens/segredo3.jpg';

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

document.getElementById("zq-rodape-ano").textContent = new Date().getFullYear();

var ocForm = document.getElementById("oc-busca-form");
var ocCampo = document.getElementById("oc-busca-campo");
var ocBotao = document.getElementById("oc-busca-botao");

// Ids das seções do seu site (os mesmos usados nos href do menu)
var ocSecoes = ["home", "ne", "sn", "endereço", "cliente"];

// Tira acentos e maiúsculas para a busca achar "endereco" e "Endereço"
function ocLimpar(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Clique na lupa: abre o campo; se já estiver aberto e com texto, faz a busca
ocBotao.addEventListener("click", function () {
    var aberto = ocCampo.classList.contains("oc-busca-aberto");
    if (!aberto) {
        ocCampo.classList.add("oc-busca-aberto");
        ocCampo.focus();
    } else if (ocCampo.value.trim() !== "") {
        ocForm.requestSubmit();
    } else {
        ocCampo.classList.remove("oc-busca-aberto");
    }
});

// Esc fecha o campo
ocCampo.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        ocCampo.value = "";
        ocCampo.classList.remove("oc-busca-aberto");
        ocBotao.focus();
    }
});

// Enter: procura o texto nas seções e leva até a primeira que tiver
ocForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var termo = ocLimpar(ocCampo.value.trim());
    if (termo === "") return;

    for (var i = 0; i < ocSecoes.length; i++) {
        var secao = document.getElementById(ocSecoes[i]);
        if (!secao) continue;

        // Procura no texto da seção e também no nome do link do menu (ex.: "Nossa Equipe")
        var link = document.querySelector('a[href="#' + ocSecoes[i] + '"]');
        var textoDoMenu = link ? link.textContent : "";
        var conteudo = ocLimpar(secao.textContent + " " + textoDoMenu);

        if (conteudo.indexOf(termo) !== -1) {
            secao.scrollIntoView({ behavior: "smooth", block: "start" });
            secao.style.outline = "3px solid #5b21b6";
            setTimeout(function (s) { s.style.outline = ""; }, 2000, secao);
            return;
        }
    }
    alert("Nenhum resultado para \"" + ocCampo.value.trim() + "\".");
});