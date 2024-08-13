let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1


function exibirTextoNaTela( tag, texto){
    let Campo = document.querySelector (tag);
    Campo.innerHTML = texto ;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rete:1.2});
}
function gerarNumeroSecreto(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite ){
        listaDeNumerosSorteados = [];
    }
    if( listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}
function exibirMensagenInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
console.log(numeroSecreto);

exibirMensagenInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if ( chute == numeroSecreto ){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute < numeroSecreto){
        exibirTextoNaTela( 'h1', 'Errou!');
        exibirTextoNaTela( 'p', 'O numero secreto é maior ');
         } else {
            exibirTextoNaTela( 'h1', 'Errou!');
            exibirTextoNaTela( 'p', 'O numero secreto é menor ');
        }
        limparCampo();
        tentativas ++;            
    }}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    exibirMensagenInicial();
    limparCampo();
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1 ;
    document.getElementById('reiniciar').setAttribute('disabled',true);
}