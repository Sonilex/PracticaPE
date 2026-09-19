// Tarea 2: Clasificador de números con múltiples condiciones
// Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores 
// lógicos, determine y muestre:
// - Si los tres son iguales: "Los tres números son iguales"
// - Si los tres son diferentes: "Los tres números son diferentes"
// - Si exactamente dos son iguales: "Hay dos números iguales"
// - Además, indique cuál de los tres números es el mayor y cuál es el menor.
// - Si algún número es negativo, agregue el mensaje "Hay números negativos".

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
        rl.question("Ingrese el tercer número: ", (num3) => {

            let a = parseFloat(num1);
            let b = parseFloat(num2);
            let c = parseFloat(num3);

            // Determinar si hay números negativos
            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay números negativos.");
            }

            // Determinar si son iguales o diferentes
            if (a === b && b === c) {
                console.log("Los tres numeros son iguales.");
            } else if (a !== b && a !== c && b !== c) {
                console.log("Los tres numeros son diferentes.");
            } else {
                console.log("Hay dos numeros iguales.");
            }

            // Determinar el mayor
            if (a >= b && a >= c) {
                console.log(`El mayor es ${a}.`);
            } else if (b >= a && b >= c) {
                console.log(`El mayor es ${b}.`);
            } else {
                console.log(`El mayor es ${c}.`);
            }

            // Determinar el menor
            if (a <= b && a <= c) {
                console.log(`El menor es ${a}.`);
            } else if (b <= a && b <= c) {
                console.log(`El menor es ${b}.`);
            } else {
                console.log(`El menor es ${c}.`);
            }

            rl.close();

        });
    });
});