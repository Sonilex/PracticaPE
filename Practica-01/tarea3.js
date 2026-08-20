// Cálculo de Consumo de Electricidad 
// Una factura de electricidad es un documento que todos recibimos en nuestros hogares. En 
// esta tarea, usted simulará el cálculo de una factura eléctrica, incluyendo impuestos, que 
// es un proceso común en empresas de servicios. 

let consumoKWh = 350; // Consumo de electricidad en el mes
let precioKWh = 0.15; // Precio fijo por kilowatt

let costoBase = consumoKWh * precioKWh; // Costo base de la factura
let impuesto = costoBase * 0.10; // Impuesto del 10% sobre el costo base
let costoTotal = costoBase + impuesto; // Costo total de la factura

console.log(`Consumo de electricidad: ${consumoKWh} kWh`);
console.log(`Costo sin impuestos: $${costoBase.toFixed(2)}`);
console.log(`Impuesto (10%): $${impuesto.toFixed(2)}`);
console.log(`Costo total: $${costoTotal.toFixed(2)}`);