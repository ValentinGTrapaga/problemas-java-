function alertarFrase(str = "Hola!") {
    alert("Hola!"); //P1
}

function problema3() {
    document.write("Hello World! <br>"); //P2
    document.write(3 + 5 + "<br>"); //P3
}   

function saludar() {
    let userName = prompt("Por favor inserte su nombre");
    document.write("Hola " + userName + "<br>"); //P4    
}

function sumaDeNum() {
    let num1 = prompt("Numero 1");
    let num2 = prompt("Numero 2");
    document.write(`La suma de los numeros es: ${Number(num1) + Number(num2)} <br>`); //P5
}

function mayorOMenor() {
    let num1 = prompt("Numero 1");
    let num2 = prompt("Numero 2");
    if (num1 > num2) {
        alert("El primer numero es mayor");
    } else if (num1 == num2) {
        alert("Los numeros son iguales");
    } else {
        alert("El segundo numero es mayor");
    }
}


function divisiblePorNumAlerta(num1, divisor = 2) {
if (num1 % divisor === 0) {
    let num1 = prompt("Numero 1");
    alert(`El numero ${Number(num1)} es divisible por ${divisor}`);
} else {
    alert(`El numero ${Number(num1)} no es divisible por ${divisor}`)
} // P8
}

function cuentaVocales() {
    let frase = prompt("Por favor, inserte una frase para analizar la aparicion de vocales");
    frase = frase.toLowerCase();
    let numA = 0;
    let numE = 0;
    let numI = 0;
    let numO = 0;
    let numU = 0;
    let largoFrase = frase.length;
    let i = 0;
    while (i < largoFrase)  {
        if (frase[i] == 'a') {
            numA++;
        } else if (frase[i] == 'e') {
            numE++;
        } else if (frase[i] == 'i') {
            numI++;
        } else if (frase[i] == 'o') {
            numO++;
        } else if (frase[i] == 'u') {
            numU++;
        }
    i++;
    }
    alert(`La cantidad de veces que ha aparecido cada letra en la frase es:
    A: ${numA}, E: ${numE}, I: ${numI}, O: ${numO}, U: ${numU}.`) // P12
}

function cuentaSimbolo(simbolo, frase) {
    frase = frase.toLowerCase();
    largoFrase = frase.length;
    let i = 0;
    let aparicion = 0;
    while (i < largoFrase) {
        if (frase[i] == simbolo) {
            aparicion++;
        }
    }
    return aparicion;
}

function esDiv(num, divisor) {
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}

function problema13() {
    let num = prompt("Por favor inserte un numero");
    if (esDiv(num, 2) && esDiv(num, 3) && esDiv(num, 5) && esDiv(num, 7)) {
        alert(`El numero es divisible por 2, 3, 5 y 7`);
    } else {
        alert(`El numero no es divisible por 2, 3, 5 y 7`);
    }
}

function problema14() {
    let num = prompt("Por favor inserte un numero");
    if (esDiv(num, 2)) {
        alert(`Es divisible por 2`);
    }
    if (esDiv(num, 3)) {
        alert(`Es divisible por 3`);
    }
    if (esDiv(num, 5)) {
        alert(`Es divisible por 5`);
    }
    if (esDiv(num, 7)) {
        alert(`Es divisible por 7`);
    }
}

function problema15 () {
    let divisores = [];
    let num = prompt(`Por favor escriba un numero para saber sus divisores`);
    for (let i = 0; i < 100; i++) {
        if (esDiv(num, i)) {
            divisores.push(i);
        }
    }
    alert(`Los divisores de ${num}, son: ${divisores}.`);
}

function problema16 () {
    let divisoresComun = [];
    let num1 = prompt(`Por favor escriba un numero (mayor que el segundo) para saber sus divisores en comun.`);
    let num2 = prompt(`Por favor escriba el segundo numero.`);
    for (let i = 0; i < num1; i++) {
        if (esDiv(num1, i) && esDiv(num2, i)) {
            divisoresComun.push(i);
        }
    }
    alert(`Los divisores es comun de ${num1} y ${num2}, son: ${divisoresComun}.`);
}


function esPrimo(num) {
    for (let i = 2; i < num-1; i++) {
        if (esDiv(num, i)) {
            return false;
        } else {
            return true;
        }
    }
}

function problema17 () {
    let num = prompt(`Por favor escriba un numero para saber sus divisores`);
    if (esPrimo(num)) {
        alert(`El numero ${num} es primo`);
    } else {
        alert(`El numero ${num} no es primo`);
    }
}

function problema25 () {
    for (let i = 1; i < 501; i++) {
        document.write(i, ` `);
        if (esDiv(i, 4) && esDiv(i, 9)) {
            document.write("(Multiplo de 4 y 9)<br>");
        } else if (esDiv(i, 4)) {
            document.write("(Multiplo de 4)<br>");
        } else if (esDiv(i, 9)) {
            document.write("(Multiplo de 9)<br>");
        } else {
            document.write("<br>");
        }
        if (esDiv(i,5)) {
        document.write("----------------------------------------<br>");
        }
    }
}

problema25();