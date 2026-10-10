import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función para convertir una calificación en letra
function obtenerLetra(calificacion) {
    if (calificacion >= 90 && calificacion <= 100) {
        return "A";
    } else if (calificacion >= 80) {
        return "B";
    } else if (calificacion >= 70) {
        return "C";
    } else if (calificacion >= 60) {
        return "D";
    } else {
        return "F";
    }
}

//Función para calcular el promedio
function calcularPromedio(calificaciones) {
    let suma = 0;

    //Sumar todas las calificaciones
    for (let i = 0; i < calificaciones.length; i++) {
        suma = suma + calificaciones[i];
    }

    //Devolver el promedio
    return suma / calificaciones.length;
}

//Función para solicitar datos mediante readline
function preguntar(mensaje) {
    return new Promise(function(resolve) {
        rl.question(mensaje, function(respuesta) {
            resolve(respuesta);
        });
    });
}

//Proceso principal
async function iniciarSistema() {

    let cantidad = Number(await preguntar("¿Cuantas calificaciones desea ingresar?: "));

    //Validar la cantidad de calificaciones
    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        console.log("Debe ingresar una cantidad entera mayor que cero.");
        rl.close();
        return;
    }

    let calificaciones = [];

    //Solicitar cada calificación
    for (let i = 1; i <= cantidad; i++) {
        let nota = Number(await preguntar(`Ingrese la calificacion ${i} (0-100): `));

        //Validar el rango de la calificación
        while (!Number.isFinite(nota) || nota < 0 || nota > 100) {
            console.log("Calificacion invalida. Debe estar entre 0 y 100.");
            nota = Number(await preguntar(`Ingrese nuevamente la calificacion ${i}: `));
        }

        calificaciones.push(nota);
    }

    //Mostrar cada calificación con su letra
    console.log("\n===== RESULTADOS =====");

    for (let i = 0; i < calificaciones.length; i++) {
        console.log(`Calificacion ${i + 1}: ${calificaciones[i]} - Letra: ${obtenerLetra(calificaciones[i])}`);
    }

    //Calcular y mostrar el promedio
    let promedio = calcularPromedio(calificaciones);

    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Letra del promedio: ${obtenerLetra(promedio)}`);

    rl.close();
}

//Ejecutar el sistema
iniciarSistema();