// Tarea 1: Clasificación de figuras geométricas
// Solicite al usuario el número de lados de una figura (3, 4, 5, 6). 
// Utilizando Switch, muestre el nombre de la figura correspondiente: 
// 3=Triángulo, 4=Cuadrilátero, 5=Pentágono, 6=Hexágono. 
// Si el número no está en la lista, muestre "Figura no reconocida".

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el número de lados de la figura (3, 4, 5, 6): ", function(lados) {
    
    switch (lados) {
        case "3":
            console.log("La figura es un Triángulo.");
            break;
        case "4":
            console.log("La figura es un Cuadrilátero.");
            break;
        case "5":
            console.log("La figura es un Pentágono.");
            break;
        case "6":
            console.log("La figura es un Hexágono.");
            break;
        default:
            console.log("Figura no reconocida.");
            break;
    }
});