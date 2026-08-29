// Tarea 2: Información de producto con precio
// Solicite el nombre del producto, precio unitario y cantidad. 
// Muestre el nombre en mayúsculas, extraiga las primeras 3 letras del producto y muestre el precio total con 2 decimales.

let nombreProducto = "Camiseta Deportiva";
let precioUnitario = 29.99;
let cantidad = 3;

let nombreProductoMayusculas = nombreProducto.toUpperCase();
let primerasTresLetras = nombreProducto.substring(0, 3);
let precioTotal = (precioUnitario * cantidad).toFixed(2);

console.log(`Nombre del producto en mayúsculas: ${nombreProductoMayusculas}`);
console.log(`Las primeras 3 letras del producto: ${primerasTresLetras}`);
console.log(`Precio total (con dos decimales): $${precioTotal}`);