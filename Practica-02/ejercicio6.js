// Información de estudiante: Solicite nombre, apellido, año de ingreso y promedio. 
// Muestre nombre y apellido en mayúsculas, primeras 3 letras del apellido, 
// últimos 2 dígitos del año y promedio con 2 decimales.

let nombre = "carlos"
let apellido = "perez"
let anio = 2020
let promedio = 8.4567

console.log(`Su nombre y apellido en mayúsculas es: ${nombre.toUpperCase()} ${apellido.toUpperCase()}`);
console.log(`Las primeras 3 letras de su apellido son: ${apellido.substring(0,3)}`);
console.log(`Los 2 digitos del anio son: ${anio.toString().slice(2,4)}`);
console.log(`Su promedio con 2 decimales es: ${promedio.toFixed(2)}`);