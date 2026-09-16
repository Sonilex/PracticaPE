// Tarea 2: Nivel de estudios
// Solicite al usuario su nivel de estudios con un número del 1 al 5:
// 1=Primaria, 2=Secundaria, 3=Bachillerato, 4=Universidad, 5=Postgrado. 
// Usando Switch, muestre el nivel correspondiente. 
// Si el número no es válido, muestre "Nivel no válido".

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese su nivel de estudios (1-5): ", function(nivel) {
    switch (nivel) {
        case "1":
            console.log("Su nivel de estudios es: Primaria.");
            break;
        case "2":
            console.log("Su nivel de estudios es: Secundaria.");
            break;
        case "3":
            console.log("Su nivel de estudios es: Bachillerato.");
            break;
        case "4":
            console.log("Su nivel de estudios es: Universidad.");
            break;
        case "5":
            console.log("Su nivel de estudios es: Postgrado.");
            break;
        default:
            console.log("Nivel no válido.");
            break;
    }
    rl.close();
});