// Extracción de datos: Solicite un código con formato "EST20260645". 
// Extraiga los primeros 3 caracteres y los últimos 4.

let codigo = 'EST20260645'
let codigo3carcateres = codigo.substring(0,3);
let codigo4caracteres = codigo.slice(8,11);

console.log(`Los primero 3 caracteres son: ${codigo3carcateres}`);
console.log(`Los últimos 4 caracteres son: ${codigo4caracteres}`);