
import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Generar el número secreto entre 1 y 50
const numeroSecreto = Math.floor(Math.random() * 50) + 1;

let intentos = 0;
let numeroUsuario = 0;

//Solicitar el primer intento
rl.question("Adivine el numero secreto entre 1 y 50: ", function(respuesta) {
    numeroUsuario = Number(respuesta);

    //Proceso: repetir mientras no adivine el numero
    function adivinarNumero() {
        while (numeroUsuario !== numeroSecreto) {

            intentos++;

            //Indicar si el numero ingresado es mayor o menor
            if (numeroUsuario > numeroSecreto) {
                console.log("El numero secreto es menor.");
            } else {
                console.log("El numero secreto es mayor.");
            }

            //Solicitar otro intento
            rl.question("Intente nuevamente: ", function(respuesta) {
                numeroUsuario = Number(respuesta);
                adivinarNumero();
            });

            return;
        }

        //Contar el intento correcto
        intentos++;

        //Mostrar el resultado
        console.log(`Felicidades, adivino el numero secreto: ${numeroSecreto}`);
        console.log(`Cantidad de intentos: ${intentos}`);

        rl.close();
    }

    adivinarNumero();
});
