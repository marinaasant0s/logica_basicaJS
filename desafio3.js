//1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador1 = 1;
while (contador1 <= 10) {
    console.log(contador1); //olhar console
    contador1++;
}

//2. Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

//3. Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.

let numeroMaximo = prompt("digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}

//4. Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.

let numeroMax = prompt("digite um número para a contagem progressiva:");;
let contador = 0;

while (contador <= numeroMax) {
    console.log(contador);
    contador++
}