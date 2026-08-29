// Tarea 4: Información completa de fecha y hora
// Obtenga la fecha y hora actual. Muestre en formato: "Hoy es 26/8/2026 y son las 9:15:30"

let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1; // Los meses comienzan desde 0
let anio = fecha.getFullYear();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(`Hoy es ${dia}/${mes}/${anio} y son las ${hora}:${minutos}:${segundos}`);