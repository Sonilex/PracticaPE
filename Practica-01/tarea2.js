// Conversión de Monedas 
// En el mundo globalizado en el que vivimos, es común necesitar convertir dinero de una 
// moneda a otra. Esta tarea le enseña cómo utilizar operadores matemáticos para realizar 
// conversiones de monedas de forma automatizada.

let cantidadDolares = 100; // Cantidad en dólares a convertir

let cantidadEuros = cantidadDolares * 0.92; // Tasa de conversión de dólares a euros

let catidadPesosSalvadorenos = cantidadDolares * 8.75; // Tasa de conversión de dólares a pesos salvadoreños

let cantidadQuetzales = cantidadDolares * 7.80; // Tasa de conversión de dólares a quetzales

//Resultados de la conversión
console.log(`${cantidadDolares} dólares equivalen a:`);
console.log(`${cantidadEuros.toFixed(2)} euros (EUR)`);
console.log(`${catidadPesosSalvadorenos.toFixed(2)} pesos salvadoreños (SVC)`);
console.log(`${cantidadQuetzales.toFixed(2)} quetzales (GTQ)`);