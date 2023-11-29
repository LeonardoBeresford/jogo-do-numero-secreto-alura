let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
};

mensagemInicial()
function verificarChute() {
  let chute = document.querySelector('input').value;
    
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'PARABÉNS');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas );
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Você errou');
    exibirTextoNaTela('p', `O numero é menor que ${chute}`);
    } else {
        exibirTextoNaTela('h1', 'Você errou');
    exibirTextoNaTela('p', `O numero é maior que ${chute}`);
    } 
    tentativas++;
    limparCampo();
  } 
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio()
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido)
      return numeroEscolhido
    }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true)
}