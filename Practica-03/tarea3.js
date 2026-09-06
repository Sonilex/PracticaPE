// Tarea 3: Descuento por monto de compra
// Solicite el monto de compra. 
// Si es mayor a $100, aplique 15% de descuento. 
// Si es mayor a $50, aplique 10%. En otro caso, no hay descuento. 
// Muestre el monto original, el descuento aplicado y el total a pagar con 2 decimales.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el monto de compra: ', (monto) => {
    const montoCompra = parseFloat(monto);

    let descuento = 0;

    if (montoCompra > 100) {
        descuento = montoCompra * 0.15;
    } else if (montoCompra > 50) {
        descuento = montoCompra * 0.10;
    }

    const total = montoCompra - descuento;
    console.log(`Monto original: $${montoCompra.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);
    rl.close();
});