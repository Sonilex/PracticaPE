// Tarea 1: Factorial de un número
// Solicite un número entero positivo al usuario.
// Usando un bucle FOR, calcule y muestre su factorial.
// Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero entero positivo: ", function(respuesta){
    let n = parseInt(respuesta);

    let factorial = 1;

    for(let i = n; i >= 1; i--){
        factorial = factorial * i;
    }

    console.log(`El factorial de ${n} es: ${factorial}`);

    rl.close();
});