// Tarea 2: Funciones recursivas con figuras y menú
// Cree funciones recursivas para calcular lo siguiente: 
// una que sume los primeros n números pares; otra que sume los primeros n números impares; 
// y otra que calcule el n-ésimo término de la serie de Fibonacci.
//  Cree un menú con Switch para que el usuario elija la operación, luego ingrese el valor de n.
//  Muestre el resultado con mensajes descriptivos.

import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función recursiva para sumar los primeros n números pares
function sumarPares(n) {

    //Caso base
    if (n === 0) {
        return 0;
    }

    //El número par correspondiente es 2 * n
    return (2 * n) + sumarPares(n - 1);
}

//Función recursiva para sumar los primeros n números impares
function sumarImpares(n) {

    //Caso base
    if (n === 0) {
        return 0;
    }

    //El número impar correspondiente es 2 * n - 1
    return (2 * n - 1) + sumarImpares(n - 1);
}

//Función recursiva para calcular Fibonacci
function calcularFibonacci(n) {

    //Casos base
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    //Sumar los dos términos anteriores
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}

//Mostrar el menú
console.log("===== MENU DE FUNCIONES RECURSIVAS =====");
console.log("1. Sumar los primeros n numeros pares");
console.log("2. Sumar los primeros n numeros impares");
console.log("3. Calcular el termino n de Fibonacci");

rl.question("Seleccione una opcion: ", function(respuesta) {

    let opcion = Number(respuesta);

    //Verificar la opción elegida
    switch (opcion) {

        case 1:
        case 2:
        case 3:
            //Solicitar n para la operación elegida
            rl.question("Ingrese un numero entero mayor o igual a cero: ", function(respuestaN) {

                let n = Number(respuestaN);

                //Validar el valor ingresado
                if (!Number.isInteger(n) || n < 0) {
                    console.log("Error: debe ingresar un entero mayor o igual a cero.");
                } else {
                    //Ejecutar la operación seleccionada
                    switch (opcion) {

                        case 1:
                            console.log(`La suma de los primeros ${n} numeros pares es: ${sumarPares(n)}`);
                            break;

                        case 2:
                            console.log(`La suma de los primeros ${n} numeros impares es: ${sumarImpares(n)}`);
                            break;

                        case 3:
                            console.log(`El termino ${n} de Fibonacci es: ${calcularFibonacci(n)}`);
                            break;
                    }
                }

                rl.close();
            });
            break;

        default:
            console.log("Opcion no valida. Seleccione 1, 2 o 3.");
            rl.close();
            break;
    }
});