// Tarea 1: Funciones recursivas para cálculos matemáticos
// Cree una función recursiva que calcule el factorial de un número entero positivo.
// Cree otra función recursiva que calcule la potencia de una base elevada a un exponente sin usar el operador **.
// Cree una tercera función recursiva que sume todos los números desde 1 hasta n. 
// Solicite al usuario un número, y muestre el factorial, la potencia (usando ese número como base y como exponente) 
// y la suma hasta ese número.

import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función recursiva para calcular el factorial
function calcularFactorial(n) {

    //Caso base: el factorial de 0 y 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }

    //Llamada recursiva
    return n * calcularFactorial(n - 1);
}

//Función recursiva para calcular una potencia sin usar **
function calcularPotencia(base, exponente) {

    //Caso base: cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }

    //Multiplicar la base por sí misma
    return base * calcularPotencia(base, exponente - 1);
}

//Función recursiva para sumar desde 1 hasta n
function sumarHastaN(n) {

    //Caso base: si n es 0, no hay nada que sumar
    if (n === 0) {
        return 0;
    }

    //Sumar n con el resultado de los números anteriores
    return n + sumarHastaN(n - 1);
}

//Solicitar el número al usuario
rl.question("Ingrese un numero entero positivo: ", function(respuesta) {

    let numero = Number(respuesta);

    //Validar que el número sea entero y positivo
    if (!Number.isInteger(numero) || numero <= 0) {
        console.log("Error: debe ingresar un entero positivo.");
    } else {
        //Mostrar los resultados
        console.log("\n===== RESULTADOS =====");
        console.log(`Factorial de ${numero}: ${calcularFactorial(numero)}`);
        console.log(`${numero} elevado a ${numero}: ${calcularPotencia(numero, numero)}`);
        console.log(`Suma desde 1 hasta ${numero}: ${sumarHastaN(numero)}`);
    }

    rl.close();
});