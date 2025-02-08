// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dia = prompt('Qual é o dia da semana?');

if (dia == 'sabado') {
    alert('bom fim de semana!');
} else if (dia == 'domingo') {
    alert('bom fim de semana!');
} else {
    alert('boa semana!');
};

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('Digite um positivo ou negativo');
if (numero > 0) {
    alert('número positivo!');
} else {
    alert('número negativo!');
};

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let pontos = prompt('Digite sua pontuação: ');
if (pontos >= 100) {
    alert('parabéns, você venceu!');
} else {
    alert('tente novamente para ganhar.');
};


// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 15; 
alert(`Seu saldo é de R$${saldo}.`);


// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);

