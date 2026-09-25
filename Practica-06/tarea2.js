// Tarea 2: Números primos
// Solicite un número N. Usando un bucle FOR, determine si el número es primo o no.
// Un número primo solo es divisible entre 1 y sí mismo.
// Muestre el resultado. Además, muestre todos los números primos desde 1 hasta N.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero: ", function(respuesta){
    let n = parseInt(respuesta);

    let divisores = 0;

    // Comprobar si N es primo
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            divisores++;
        }
    }

    console.log('\n=== RESULTADO ===');

    if(divisores === 2){
        console.log(`El numero ${n} es primo.`);
    } else {
        console.log(`El numero ${n} no es primo.`);
    }

    // Mostrar todos los números primos desde 1 hasta N
    console.log(`\nNumeros primos desde 1 hasta ${n}:`);

    for(let numero = 2; numero <= n; numero++){

        let cantidadDivisores = 0;

        for(let i = 1; i <= numero; i++){

            if(numero % i === 0){
                cantidadDivisores++;
            }
        }

        if(cantidadDivisores === 2){
            console.log(numero);
        }
    }

    rl.close();
});