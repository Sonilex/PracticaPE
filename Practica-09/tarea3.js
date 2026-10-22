// Tarea 3: Funciones recursivas para manejo de cadenas
// Cree las siguientes funciones recursivas: una que reciba una cadena y devuelva la cantidad de vocales; 
// otra que reciba una cadena y devuelva la cadena invertida;
// y otra que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés). 
// Solicite una palabra o frase al usuario y muestre los tres resultados.

import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función recursiva para contar las vocales
function contarVocales(cadena) {

    //Caso base: si no quedan caracteres, devuelve 0
    if (cadena.length === 0) {
        return 0;
    }

    //Obtener el primer caracter
    let letra = cadena[0].toLowerCase();
    let vocales = "aeiouáéíóúü";

    //Contar la primera letra si es una vocal
    if (vocales.includes(letra)) {
        return 1 + contarVocales(cadena.slice(1));
    } else {
        return contarVocales(cadena.slice(1));
    }
}

//Función recursiva para invertir una cadena
function invertirCadena(cadena) {

    //Caso base: una cadena vacía no tiene caracteres
    if (cadena.length === 0) {
        return "";
    }

    //Colocar el primer caracter al final del resultado invertido
    return invertirCadena(cadena.slice(1)) + cadena[0];
}

//Función recursiva para comprobar si es palíndromo
function esPalindromo(cadena) {

    //Preparar el texto: minúsculas y sin espacios ni signos
    let texto = cadena
        .toLowerCase()
        .replace(/[^a-záéíóúüñ0-9]/g, "");

    //Caso base: una o ninguna letra forma un palíndromo
    if (texto.length <= 1) {
        return true;
    }

    //Si los extremos son diferentes, no es palíndromo
    if (texto[0] !== texto[texto.length - 1]) {
        return false;
    }

    //Comprobar recursivamente el texto entre los extremos
    return esPalindromo(texto.slice(1, -1));
}

//Solicitar una palabra o frase
rl.question("Ingrese una palabra o frase: ", function(respuesta) {

    //Mostrar los resultados
    console.log("\n===== RESULTADOS =====");
    console.log(`Cantidad de vocales: ${contarVocales(respuesta)}`);
    console.log(`Cadena invertida: ${invertirCadena(respuesta)}`);

    if (esPalindromo(respuesta)) {
        console.log("La palabra o frase es un palindromo.");
    } else {
        console.log("La palabra o frase no es un palindromo.");
    }

    rl.close();
});