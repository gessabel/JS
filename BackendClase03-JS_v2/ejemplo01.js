//DECLARACIÓN DE VARIABLES

/* Declara tres variables a, b y c con los valores 5, 10 y 15
respectivamente. Imprime la suma de a y b

*/

let a = 5;
let b = 10;
let c = 15;

console.log(a+b); //Resultado: 15


//OPERACIONES ARITMÉTICAS

/* Declara dos variables X y Y con los valores 8 y 3. Imprime el resultado de
la multiplicación y la división de X por Y*/

let x = 8;
let y = 3;

console.log(x*y); // 24
console.log(x/y); // 2.666...5

//CONCATENACION DE CADENAS

/*Declara dos variables firstName y lastName. Imprime una cadena que diga:
"Hola, mi nombre es [nombre] [apellido]"

*/

let firstName = "Andrew";
let lastName = "Torres";

console.log("Hola, mi nombre es " + firstName + " " + lastName + ".");

//CONCICIONALES

/* Escribir un programa que verifique si un número es positivo, negativo o cero.
    Declare una variable num y asigna un valor.
    Usa if, else if y else para imprimir el resultado adecuado.
*/

let num = -10;

if (num > 0){
    console.log("El número es positivo");
} else if (num < 0){
    console.log("El número es negativo")
} else {
    console.log("EL número es cero")
}

console.log("=========Enviar==========")

//BUCLES


/*Escribe un programa que imprima los números del 1 al 10 usando el bucle for */

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//FUNCIONES:

/*Escribe una función llamada Saludar que tome un nombre como parámetro y devuelva
un saludo como "Hola, [nombre]" */

function saludar(nombre){
    return "Hola, " + nombre + "!";
}

console.log(saludar("Andrew"));

/* Escribe una función llamada Sumar que tome dos números como parámetro y devuelva
la suma*/

function Sumar(numero1, numero2) {
    return numero1 + numero2;
}

// Ejemplo de uso
let resultado = Sumar(8, 3);
console.log(resultado);  // Salida: 11

/* Escribe una función llamada Mayor que tome dos números como parámetro y devuelva el 
mayor de ellos*/

function Mayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

// Ejemplo de uso
let resul = Mayor(8, 11);
console.log(resultado);  // Salida: 11


/* Escribe una función llamada esPar que tome un número como parámetro y devuelva "true"
si el número es par y "false" si es impar*/

function esPar(numero) {
    return numero % 2 === 0;
}

// Ejemplo de uso
let resultado1 = esPar(4);
console.log(resultado1);  // Salida: true

let resultado2 = esPar(7);
console.log(resultado2);  // Salida: false


/* Escribe una función llamada Factorial que tome un número como parámetro y devuelva 
el factorial*/

function factorial(n){
    if (n === 0){
        return 1;
    }
    return n * factorial(n-1); 
}

console.log(factorial(8)); 


//ARRAY Y BUCLES

//Declara un array con los números del 1 al 5. Usa un bucle para imprimir cada número multiplicado por 2.

let numeros  = [1, 2, 3, 4,     ];

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i] *2);
}

//Objetos

/*Declara un objeto llamado persona con propiedades:
    - Nombre, edad, ciudad
    - Imprime una cadena que diga "Me llamo [nombre], tengo [edad] años y vivo en [ciudad].".*/

let persona = {
    nombre: "Andrew",
    edad: 28,
    ciudad: "Chiclayo"
};


console.log("Me llamo " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".");

//Funciones de Orden Superior:

/*Escribe una funación llamada Operar que tome dos números y una función como parámetros.
La función debe aplicar la función recibida a los dos números y devolver el resultado.
Luego, usa esta función para sumar, restar, multiplicar y dividir los números.
*/

console.log("========================");
function operar(num1, num2, operacion){
    return operacion(num1, num2);
}

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

console.log(operar(10, 5, sumar));
console.log(operar(10, 5, restar));
console.log(operar(10, 5, multiplicar));
console.log(operar(10, 5, dividir));


