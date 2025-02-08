alert('Boas vindas ao jogo do número secreto'); //responsável por exibir mensagem na tela.

//variáveis
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;

let tentativas = 1;


//condicionais

//enquanto chute não for igual ao numero secreto faça
while ( chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    //se o chute for igual ao número secreto.
    if (chute == numeroSecreto) {
        break;
    } else { //se o chutee NÃO for igual ao número secreto.
        if (chute > numeroSecreto) {
            alert (`o número é menor que ${chute}`);
        } else {
            alert (`o número é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'
alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }

