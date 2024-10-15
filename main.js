console.log ("Estoy conectada?")

// 1. Funcion resta:

function resta(a, b) {
    return a - b;
}

console.log(resta(10, 5)); // Imprime 5

// 2. 

function clasificarNota() {
let nota = parseInt(prompt("Ingresa una nota del 0 al 10:"));

    switch (true) {
        case (nota >= 0 && nota <= 4):
            return "Insuficiente";
        case (nota >= 5 && nota <= 6):
            return "Suficiente";
        case (nota >= 7 && nota <= 8):
            return "Notable";
        case (nota >= 9 && nota <= 10):
            return "Sobresaliente";
        default:
            return "Nota inválida. Debes ingresar un número entre 0 y 10.";
    }
}

console.log(clasificarNota());

// otra forma de resolver el ejercicio anterior:

function clasificaNota() {
let nota = parseInt(prompt("Introduce una nota del 0 al 10:"));

    switch (true){
        case (nota >= 0 && nota <= 4):
            console.log ("Insuficiente");
        break;
        case (nota >= 5 && nota <= 6):
            console.log ("Suficiente");
        break;
        case (nota >= 7 && nota <= 8):
            console.log ();
        break; 
        case (nota >= 9 && nota <= 10):
            console.log("Sobresaliente");
        break;
        default:
        console.log ("Esta nota no es valida, tienes que poner una nota del 0 al 10");
    }
}
clasificaNota()

// Crea la función duplicaNumero. Debe recibir un tipo number y devolver el doble del valor recibido.
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'.

function duplicaNumero(num) {
    if (typeof num !== 'number') {
        return 'Debo ser ejecutada con un número';
    }
    return num * 2;
}

console.log(duplicaNumero(5));   // Imprime 10
console.log(duplicaNumero("5")); // Imprime 'Debo ser ejecutada con un número'

// Crea la función caracterInicial. Debe recibir un tipo string y devolver un string con el primer carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.

function caracterInicial(str) {
    if (typeof str !== 'string') {
        return 'Debo ser ejecutada con un string';
    }
    if (str.length === 0) {
        return 'Debo ser ejecutada con un string no vacío';
    }
    return str[0];
}

console.log(caracterInicial("Hola")); // Imprime 'H'
console.log(caracterInicial(""));     // Imprime 'Debo ser ejecutada con un string no vacío'
console.log(caracterInicial(5));      // Imprime 'Debo ser ejecutada con un string'

// Crea la función ultimoCaracter. Debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'.

function ultimoCaracter(str) {
    if (typeof str !== 'string') {
        return 'Debo ser ejecutada con un string';
    }
    if (str.length === 0) {
        return 'Debo ser ejecutada con un string no vacío';
    }
    return str[str.length - 1];
}

console.log(ultimoCaracter("Hola")); // Imprime 'a'
console.log(ultimoCaracter(""));     // Imprime 'Debo ser ejecutada con un string no vacío'
console.log(ultimoCaracter(5));      // Imprime 'Debo ser ejecutada con un string'

// Crea la función cuentaCaracteres. Debe recibir un tipo string y devolver un number con el número de caracteres.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.

function cuentaCaracteres(str) {
    if (typeof str !== 'string') {
        return 'Debo ser ejecutada con un string';
    }
    return str.length;
}

console.log(cuentaCaracteres("Hola")); // Imprime 4
console.log(cuentaCaracteres(5));      // Imprime 'Debo ser ejecutada con un string'

// Un palíndromo es una palabra que se escribe igual del derecho que del revés, por ejemplo: orejero, rallar o somos.
// Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía, devolver 'No es un formato correcto'.

function esPalindromo(palabra) {
    if (typeof palabra !== 'string' || palabra.length === 0) {
        return 'No es un formato correcto';
    }
    let palabraReversa = palabra.split('').reverse().join('');
    return palabra === palabraReversa;
}

console.log(esPalindromo("somos")); // Imprime true
console.log(esPalindromo("hola"));  // Imprime false
console.log(esPalindromo(""));      // Imprime 'No es un formato correcto'

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales.
// Para 2 debería devolver '2.00 €'. Si la función no recibe un número debería devolver 'No es un formato correcto'.

function getPrecioMostrar(precio) {
    if (typeof precio !== 'number') {
        return 'No es un formato correcto';
    }
    return precio.toFixed(2) + ' €';
}

console.log(getPrecioMostrar(2));  // Imprime '2.00 €'
console.log(getPrecioMostrar("2")); // Imprime 'No es un formato correcto'

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división.
// Si el segundo número es 0, debe devolver un mensaje de error.

function division(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
}

console.log(division(10, 2)); // Imprime 5
console.log(division(10, 0)); // Imprime 'No se puede dividir por cero'

// Crea una función que, dada una array de números, devuelva una nueva array que tenga solo los números que son 5 o más.
// Ejemplo entrada [3, 6, 8, 2] salida [6, 8].

function filtrarNumeros(arr) {
    return arr.filter(num => num >= 5);
}

console.log(filtrarNumeros([3, 6, 8, 2])); // Imprime [6, 8]

// Crea una función que nos pida un número por prompt y que nos indique si es o no un número primo.
// Debe devolver true si es primo, sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo.
function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let numero = parseInt(prompt("Introduce un número:"));
console.log(esPrimo(numero)); // Indica si el número ingresado es primo o no