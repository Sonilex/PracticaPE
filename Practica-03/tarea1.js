// Tarea 1: Validar número positivo, negativo o cero
// Solicite un número al usuario usando readline. 
// Verifique si es positivo, negativo o cero. 
// Muestre un mensaje que indique el resultado: "El número es positivo", "El número es negativo" o "El número es cero".

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un número: ', (numero) => {

    const num = parseFloat(numero);

    if (num >= 1) {
        console.log('El numero es positivo.')
    }else if (num <= 1){
        console.log('El numero es negativo.')
    }else{
        console.log('Su numero es cero.')
    }

    rl.close();

});