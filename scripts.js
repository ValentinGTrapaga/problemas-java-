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
}