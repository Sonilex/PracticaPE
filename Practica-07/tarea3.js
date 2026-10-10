
import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Definición del arreglo de productos
const inventario = [
    { nombre: "Arroz", precio: 1.25, cantidad: 20 },
    { nombre: "Frijoles", precio: 1.50, cantidad: 15 },
    { nombre: "Azucar", precio: 0.90, cantidad: 25 },
    { nombre: "Aceite", precio: 2.75, cantidad: 10 }
];

//Definición de variables
let totalProductos = 0;
let valorTotal = 0;

//Recorrer el inventario con FOR...OF
console.log("===== INVENTARIO DE PRODUCTOS =====");

for (const producto of inventario) {

    //Calcular el valor total de cada producto
    let valorProducto = producto.precio * producto.cantidad;

    //Mostrar los datos del producto
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio.toFixed(2)}`);
    console.log(`Cantidad: ${producto.cantidad}`);
    console.log(`Valor total: $${valorProducto.toFixed(2)}`);
    console.log("------------------------------");

    //Acumular las cantidades y el valor del inventario
    totalProductos = totalProductos + producto.cantidad;
    valorTotal = valorTotal + valorProducto;
}

//Crear el objeto con el resumen
const resumen = {
    totalProductos: totalProductos,
    valorTotalInventario: valorTotal
};

//Recorrer el resumen con FOR...IN
console.log("\n===== RESUMEN DEL INVENTARIO =====");

for (const propiedad in resumen) {

    //Mostrar cada propiedad y su valor
    if (propiedad === "valorTotalInventario") {
        console.log(`${propiedad}: $${resumen[propiedad].toFixed(2)}`);
    } else {
        console.log(`${propiedad}: ${resumen[propiedad]}`);
    }
}

//Cerrar la interfaz
rl.close();
