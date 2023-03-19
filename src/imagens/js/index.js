/*
objetivo - quando clicamos no botão temos que mostrar a imagem de fundo correspondente

- passo 1- dar um jeito de pegar o elemento HTML dos botões

- passo 2 - dar um jeito de identificar o cliente do usuário no botão

- passo 3 - desmarcar o botão selecionado anterior

- passo 4 - marcar o botão clicado como se estivesse selecionada

- passo 5 - esconder a imagem anterior

- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//passo 1- dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 - dar um jeito de identificar o cliente do usuário no botão
botoesCarrossel.forEach((botao, indece) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);
        
        esconderImagemAtiva();

        mostrarImagemDeFundo(indece);
    })
})
function mostrarImagemDeFundo(indece) {
    imagens[indece].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

