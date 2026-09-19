// Tarea 3: Simulador de cajero automático con menú
// Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
// Muestre un menú con las opciones:
// 1. Consultar saldo
// 2. Retirar dinero
// 3. Depositar dinero
// 4. Salir
// Usando Switch, ejecute la opción seleccionada:
// - Opción 1: Muestre el saldo actual.
// - Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5 
//   y que no exceda el saldo. Si cumple, reste del saldo; si no, muestre el error 
//   correspondiente.
// - Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no 
//   exceda $5000 en un solo depósito. Si cumple, sume al saldo; si no, muestre 
//   el error.
// - Opción 4: Muestre "Gracias por usar el cajero" y salga.
// - Si la opción no es válida, muestre "Opción no válida".

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let saldo = 1000;

rl.question(
    "Bienvenido al cajero automático. Seleccione una opción:\n1. Consultar saldo\n2. Retirar dinero\n3. Depositar dinero\n4. Salir\n",
    (opcion) => {

        switch (opcion) {

            case "1":
                console.log(`Su saldo actual es: $${saldo}`);
                rl.close();
                break;

            case "2":
                rl.question("Ingrese el monto a retirar: ", (monto) => {

                    monto = parseFloat(monto);

                    if (monto > 0 && monto % 5 === 0 && monto <= saldo) {
                        saldo = saldo - monto;
                        console.log(`Usted ha retirado $${monto}. Su saldo restante es de $${saldo}.`);
                    } else {
                        console.log("No cumple con los requisitos para poder retirar.");
                    }

                    rl.close();
                });
                break;

            case "3":
                rl.question("Ingrese el monto a depositar: ", (monto) => {

                    monto = parseFloat(monto);

                    if (monto > 0 && monto <= 5000) {
                        saldo = saldo + monto;
                        console.log(`Usted ha depositado $${monto}. Su saldo actual es de $${saldo}.`);
                    } else {
                        console.log("No cumple con los requisitos para poder depositar.");
                    }

                    rl.close();
                });
                break;

            case "4":
                console.log("Gracias por usar el cajero.");
                rl.close();
                break;

            default:
                console.log("Opción no válida.");
                rl.close();
        }
    }
);