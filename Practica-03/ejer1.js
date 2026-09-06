// Validar número positivo: Solicite un número al usuario. 
// Verifique si es positivo, negativo o cero, y muestre un mensaje correspondiente.

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