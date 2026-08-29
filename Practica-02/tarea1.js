// Tarea 1: Procesar nombre de usuario
// Solicite al usuario su nombre completo. 
// Convierta el nombre a mayúsculas, extraiga las primeras 4 letras y 
// luego conviértalo a minúsculas. Muestre todos los resultados.

let nombreCompleto = "Hernesto Carlos Gonzalez de la Cruz"; 
let nombreMayusculas = nombreCompleto.toUpperCase();
let primerasCuatroLetras = nombreCompleto.substring(0, 4);
let primerasCuatroLetrasMinusculas = primerasCuatroLetras.toLowerCase();

console.log(`Nombre completo en mayúsculas: ${nombreMayusculas}`);
console.log(`Primeras 4 letras: ${primerasCuatroLetras}`);
console.log(`Primeras 4 letras en minúsculas: ${primerasCuatroLetrasMinusculas}`);