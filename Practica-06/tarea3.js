// Tarea 3: Promedio de calificaciones
// Solicite al usuario cuántas calificaciones desea ingresar.
// Usando un bucle FOR y readline, solicite cada calificación,
// acumule la suma y al final calcule y muestre el promedio.
// Además, muestre la calificación más alta y la más baja ingresada.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese cuantas calificaciones desea ingresar: ", function(respuesta){
    
    let n = parseInt(respuesta);

    let notas = [];
    let sumaTotal = 0;

    function pedirNota(i) {

        if(i <= n) {

            rl.question(`Ingrese la calificacion ${i}: `, function(respuestaNota){

                let nota = Number(respuestaNota);

                notas.push(nota);
                sumaTotal = sumaTotal + nota;

                pedirNota(i + 1);
            });

        } else {

            let promedio = sumaTotal / n;

            let notaMayor = notas[0];
            let notaMenor = notas[0];

            for(let i = 1; i < notas.length; i++){

                if(notas[i] > notaMayor){
                    notaMayor = notas[i];
                }

                if(notas[i] < notaMenor){
                    notaMenor = notas[i];
                }
            }

            console.log("\n=== RESULTADO ===");
            console.log(`Suma total: ${sumaTotal}`);
            console.log(`Promedio: ${promedio.toFixed(2)}`);
            console.log(`Calificacion mas alta: ${notaMayor}`);
            console.log(`Calificacion mas baja: ${notaMenor}`);

            rl.close();
        }
    }

    pedirNota(1);
});