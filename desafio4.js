//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log('Boas-vindas você!!');

//2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'Marina Santos';
console.log(`Olá, ${nome}!`);

//3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .


let nome2 = 'Marina Santos';
alert(`Olá, ${nome2}`);

//4. Utilize o prompt e faça a seguinte pergunta: Qual  a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagem = prompt('Qual a linguagem que você mais curte?');
console.log(`A linguagem é ${linguagem}`);

//5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 40;
let valor2 = 40;

let resultado = valor1 + valor2;

console.log(`A soma entre o valor1 ${valor1} e o valor2 ${valor2} é igual a ${resultado}.`);

//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor3 = 10;
let valor4 = 8;

let resultado2 = valor1 - valor2;

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);

//7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade1 = prompt('Insira sua idade: ');

if(idade1 > 18){
    console.log('Maior de idade, ENTRE!')
} else{
    console.log('Menor de idade, FORA!')
}


//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero1 = parseFloat(prompt("Digite um número:"));


if (numero1 > 0) {
    console.log("O número é positivo.");
} else if (numero1 < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//9. Use um loop while para imprimir os números de 1 a 10 no console.

let numero2 = 1;
while (numero2 <= 10) {
    console.log(numero2);
    numero2++;
}

//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 8; // Substitua pelo valor da nota que deseja testar

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//11. Use o Math.ramdon para gerar qualquer número aleatório e exiba esse número no console.

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//12. Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroAleatorio1 = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio1);


//13. Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiroAleatorio2 = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio2);