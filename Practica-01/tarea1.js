// Cálculo de Perímetro y Área de un Círculo
// Un círculo es una figura geométrica muy común en matemáticas e ingeniería. En esta
// tarea, usted necesita calcular dos propiedades importantes de un círculo: su perímetro
// (también llamado circunferencia) y su área.

let radio = 5; // Radio del círculo en metros

// Fórmula para calcular el perímetro (circunferencia) de un círculo: P = 2 * π * r
let perimetro = 2 * Math.PI * radio;

// Fórmula para calcular el área de un círculo: A = π * r^2
let area = Math.PI * Math.pow(radio, 2);

console.log(`Para un círculo con radio de ${radio} metros:`);
console.log(`El perímetro del círculo es: ${perimetro.toFixed(2)} metros`);
console.log(`El área del círculo es: ${area.toFixed(2)} metros cuadrados`);