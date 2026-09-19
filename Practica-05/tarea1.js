// Tarea 1: Sistema de acceso bancario
// Solicite al usuario su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium) y el monto 
// a retirar. Usando Switch, asigne un límite de retiro según el tipo de tarjeta: 
// 1=$500, 2=$1000, 3=$2000. Luego, valide con IF si el monto solicitado es menor 
// o igual al límite y si es múltiplo de $10. Si cumple ambas condiciones, muestre 
// "Retiro exitoso". Si el monto excede el límite, muestre "Límite excedido". Si no 
// es múltiplo de $10, muestre "El monto debe ser múltiplo de 10". Si el tipo de 
// tarjeta no es válido, muestre "Tarjeta no válida".

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ", (tipo) => {
    rl.question("Ingrese el monto a retirar: ", (monto) => {

        let montoRetiro = parseFloat(monto);
        let limite;

        switch (tipo) {
            case "1":
                limite = 500;
                break;

            case "2":
                limite = 1000;
                break;

            case "3":
                limite = 2000;
                break;

            default:
                console.log("Tarjeta no válida");
                rl.close();
                return;
        }

        if (montoRetiro > limite) {
            console.log("Límite excedido");
        } else if (montoRetiro % 10 !== 0) {
            console.log("El monto debe ser múltiplo de 10");
        } else {
            console.log("Retiro exitoso");
        }

        rl.close();
    });
});
