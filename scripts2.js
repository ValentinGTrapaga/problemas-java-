function js2prob1(num) {
    for (let i = 0; i < num; i++) {
        console.log("Bienvenidos al curso Full Stack");
    }
}

function js2prob3(num1, num2, num3) {
    return ((num1 + num2 + num3)/3);
}

function js2prob4() {
    let num = 0;
    let sumArray = [];
    let sum = 0;
    while(num != -1) {
        sumArray.push(num); //Paso los numeros al array, el primero es 0
        num = prompt("Por favor ingrese la nota a promediar")
    }
    for (let j = 0; j < sumArray.length; j++) {
        sum += Number (sumArray[j]); //Calculo la suma del total, el primer 0 no influye
    }
    let promedio = sum/(sumArray.length - 1); //Aca saco uno al length porque hay un 0 de mas
    alert(`El promedio es: ${promedio}`)
    return (promedio);
}

function siguiente(num) { //Problema 4
    return num+1;
}

function doble(num) { //Problema 5
    return num*2;
}

function cuadrado(num) { //Problema 6
    return num**2;
}

function imprimirValores(num) {
    alert(`El numero es ${num}. El siguiente numero es: ${siguiente(num)}, el doble del numero es: ${doble(num)}, el cuadrado del numero es: ${cuadrado(num)}.`)
}

function imprimirElDobleDelSiguiente(num) {
    solucion = doble(siguiente(num));
    alert(`El numero es ${num}. El doble del siguiente numero es: ${solucion}.`)
}

function cuadrado(lado) {
    let area = lado**2;
    let perimetro = lado*4;
    alert(`El perimetro es: ${perimetro}, el area es: ${area}.`)

    return area, perimetro;
}

function circulo(radio) {
    let area = 3.1415*(radio**2);
    let perimetro = 2*3.1415*radio;
    alert(`El perimetro es: ${perimetro}, el area es: ${area}.`)

    return area, perimetro;
}

function diasDeMes(mes) {
    let dias31 = [1, 3, 5, 7, 8, 10, 12];
    let dias30 = [4, 6, 9, 11];
    if (dias31.indexOf(mes) != -1) {
        alert(`El mes dado tiene 31 dias.`);
        return 31;
    } else if (dias30.indexOf(mes) != -1) {
        alert(`El mes dado tiene 30 dias.`);
        return 30;
    } else if (mes == 2) {
        alert(`El mes dado tiene 28 dias.`);
        return 28;
    } else {
        alert(`No existe ese mes en el calendario.`);
        return false;
    }
}

function añoBisiesto(ano) {
    if ((ano % 4 === 0) && (ano % 100 != 0 || ano % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

function asc(a, b) {
    return a - b; // Declaro el orden ascendente para sortear el array
}

function encontrarDuplicados(arr) { // Problema 24
    let duplicados = []; // Creo el array de duplicados
    arr = arr.sort(asc); // Ordeno el array dado para buscarle los dups
    let largoArr = arr.length; // Para que el programa no busque siempre length y trabaje de mas
                                // Lo guardo en esta variable largoArr
    for (let i = 0; i < largoArr - 1; i++) {    // Recorro el array
        if ((arr[i] == arr[i+1]) && ((duplicados.indexOf(arr[i])) == -1)) { // Si es igual al de
            // al lado y no esta en el array de duplicados, lo pongo (para evitar repetidos)
            duplicados.push(arr[i]);
        }
    }
    alert(`Los duplicados son: ${duplicados}`)

    return duplicados;
}

function invertirNum(num) { // Problema 26
    let numInv = (
        parseFloat( // Una vez hecho todo lo del parentesis, lo paso a float
        num // Si lo pongo asi le puedo hacer muchas cosas a la variable sin repetirla
            .toString() // Paso a string para trabajarlo mejor
            .split('') // Lo separo para obtener el array y poder usar revers()
            .reverse() // Lo doy vuelta item a item en el array
            .join('') // Lo uno
        ) * Math.sign(num) // Para mantener el signo
    )
    alert(`El numero es: ${Number(num)} e invertido es: ${Number(numInv)}.`)

    return numInv;
}

function ordenarString(str) {
    let chars = str.split('');
    chars = chars.sort();
    let rts = [];
    largoStr = chars.length;
    for (let i = 0; i < largoStr; i++) {
        if ((chars[i] >= 'A' && chars[i] <= 'Z') || (chars[i] >= 'a' && chars[i] <= 'z')) {
            rts.push(chars[i]);
        }    
    }
    let strOrdenado = rts.join('');
    alert(`El string es: "${str}", y ordenado: "${strOrdenado}".`)
    return strOrdenado;
}

ordenarString("Hola");