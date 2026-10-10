import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función para contar las vocales
function contarVocales(cadena) {
    let cantidad = 0;

    //Recorrer cada caracter de la cadena
    for (const letra of cadena) {
        if ("aeiouáéíóúü".includes(letra.toLowerCase())) {
            cantidad++;
        }
    }

    return cantidad;
}

//Función para invertir la cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

//Función para comprobar si es palíndromo
function esPalindromo(cadena) {

    //Convertir a minúsculas y quitar espacios y signos
    let texto = cadena
        .toLowerCase()
        .replace(/[^a-záéíóúüñ0-9]/g, "");

    //Comparar el texto con su versión invertida
    return texto === texto.split("").reverse().join("");
}

//Solicitar la palabra o frase
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