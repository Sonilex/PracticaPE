// Tarea 3: Máquina de bebidas
// Cree un programa que simule una máquina expendedora de bebidas con las siguientes opciones:
// 1=Agua, 2=Refresco, 3=Jugo, 4=Café, 5=Té. 
// Usando Switch, muestre el mensaje "Ha seleccionado: [nombre de la bebida]". 
// Si la opción no es válida, muestre "Bebida no disponible". 
// Además, si la bebida es Refresco o Jugo, agregue el mensaje "¿Desea agregar hielo?".

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Bienvenido a la maquina expendedora de bebidas seleccione su bebida: \n1= Agua \n2= Refresco \n3= Jugo \n4= Café \n5= Té ", function(bebidas) {
    switch (bebidas) {
        case "1":
            console.log("Ha seleccionado: Agua.");
            break;
        case "2":
            console.log("Ha seleccionado: Refresco.");
            rl.question("¿Desea agregar hielo? (si/no): ", function(respuesta) {
                if (respuesta.toLowerCase() === "si") {
                    console.log("Se agregará hielo a su bebida.");
                }
                rl.close();
            });
            break;
        case "3":
            console.log("Ha seleccionado: Jugo.");
            rl.question("¿Desea agregar hielo? (si/no): ", function(respuesta) {
                if (respuesta.toLowerCase() === "si") {
                    console.log("Se agregará hielo a su bebida.");
                }
                rl.close();
            });
            break;
        case "4":
            console.log("Ha seleccionado: Café.");
            break;
        case "5":
            console.log("Ha seleccionado: Té.");
            break;
        default:
            console.log("Bebida no disponible.");
            break;
    }
    if (bebidas !== "2" && bebidas !== "3") {
        rl.close();
    }
});