// Tarea 3: Calcular edad y años de experiencia
// Solicite al usuario su año de nacimiento. 
// Obtenga el año actual, calcule su edad y muestre: "Tu edad aproximada es: X años."

let anioNacimiento = 1996;
let fechaActual = new Date();
let anioActual = fechaActual.getFullYear();
let edad = anioActual - anioNacimiento;

console.log(`Tu edad aproximada es: ${edad} años.`);