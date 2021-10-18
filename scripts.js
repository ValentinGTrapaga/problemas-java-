alert("Hola!"); //P1

document.write("Hello World! <br>"); //P2

document.write(3+5 + "<br>"); //P3

let userName = prompt("Por favor inserte su nombre");
document.write("Hola " + userName + "<br>"); //P4

let num1 = prompt("Numero 1");
let num2 = prompt("Numero 2");
document.write(`La suma de los numeros es: ${Number(num1)+Number(num2)} <br>`); //P5

if (num1 > num2) {
    alert("El primer numero es mayor");
} else if (num1 == num2) {
    alert("Los numeros son iguales");
} else {
    alert("El segundo numero es mayor");
} // P6

if (num1%2 === 0) {
    alert(`El numero ${Number(num1)} es divisible por 2`);
} else {
    alert(`El numero ${Number(num1)} no es divisible por 2`)
} // P8

let frase = prompt("Por favor, inserte una frase para analizar la aparicion de vocales");
let numA = 0,
    numE = 0,
    numI = 0,
    numO = 0,
    numU = 0;

let largoFrase = frase.length;
for(let i = 0; i > largoFrase; i++) {
    switch(frase[i]) {
        case 'a':
        case 'A':
            numA++;
            break;
        case 'e':
        case 'E':
            numE++;
            break;
        case 'i':
        case 'I':
            numI++;
            break;
        case 'o':
        case 'O':
            numO++;
            break;
        case 'u':
        case 'U':
            numU++;
            break;
    }
}

alert(`La cantidad de veces que ha aparecido cada letra en la frase es:
    A: ${numA}, E: ${numE}, I: ${numI}, O: ${numO}, U: ${numU}.`) // P12 DEBUGGEAR!!!