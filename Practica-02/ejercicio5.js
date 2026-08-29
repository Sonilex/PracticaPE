// Cálculo de edad: Solicite al usuario su año de nacimiento. Obtenga el año actual y calcule su edad.

let fecha = new Date();

let nacimineto = 2007;
let anio = fecha.getFullYear();

let edad = anio - nacimineto;

console.log(`Su edad es: ${edad}`);