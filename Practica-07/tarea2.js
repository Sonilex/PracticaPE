
import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Definición de variables
let saldo = 1000;
let opcion = 0;

//Solicitar datos mediante readline
function preguntar(mensaje) {
    return new Promise(function(resolve) {
        rl.question(mensaje, function(respuesta) {
            resolve(respuesta);
        });
    });
}

//Proceso principal del cajero
async function cajero() {
    do {
        //Mostrar el menu
        console.log("\n===== CAJERO AUTOMATICO =====");
        console.log("1. Consultar saldo");
        console.log("2. Retirar dinero");
        console.log("3. Depositar dinero");
        console.log("4. Salir");

        opcion = Number(await preguntar("Seleccione una opcion: "));

        //Evaluar la opcion seleccionada
        switch (opcion) {

            case 1:
                //Mostrar el saldo disponible
                console.log(`Su saldo actual es: $${saldo.toFixed(2)}`);
                break;

            case 2:
                //Solicitar la cantidad que desea retirar
                {
                    let retiro = Number(await preguntar("Ingrese la cantidad a retirar: "));

                    if (retiro <= 0 || Number.isNaN(retiro)) {
                        console.log("Error: ingrese una cantidad valida mayor que cero.");
                    } else if (retiro > saldo) {
                        console.log("Fondos insuficientes. No puede retirar mas de su saldo.");
                    } else {
                        saldo = saldo - retiro;
                        console.log(`Retiro realizado. Saldo restante: $${saldo.toFixed(2)}`);
                    }
                }
                break;

            case 3:
                //Solicitar la cantidad que desea depositar
                {
                    let deposito = Number(await preguntar("Ingrese la cantidad a depositar: "));

                    if (deposito <= 0 || Number.isNaN(deposito)) {
                        console.log("Error: el deposito debe ser mayor que cero.");
                    } else {
                        saldo = saldo + deposito;
                        console.log(`Deposito realizado. Saldo actual: $${saldo.toFixed(2)}`);
                    }
                }
                break;

            case 4:
                //Finalizar el programa
                console.log("Gracias por utilizar el cajero automatico.");
                break;

            default:
                //Validar una opcion incorrecta
                console.log("Opcion no valida. Seleccione una opcion del 1 al 4.");
                break;
        }

    } while (opcion !== 4);

    //Cerrar la interfaz al salir
    rl.close();
}

//Ejecutar el cajero
cajero();
