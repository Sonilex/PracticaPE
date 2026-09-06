// Tarea 2: Comparar calificaciones
// Solicite al usuario dos calificaciones (0-100). 
// Compare cuál es la más alta. Si son iguales, indíquelo. 
// Muestre un mensaje descriptivo con el resultado.

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la primera calificación (0-100): ', (calificacion1) => {
    rl.question('Ingrese la segunda calificación (0-100): ', (calificacion2) => {
        const num1 = parseFloat(calificacion1);
        const num2 = parseFloat(calificacion2);

        if (num1 > num2) {
            console.log(`La calificación más alta es: (${num1}) .`);
        } else if (num1 < num2) {
            console.log(`La calificación más alta es: (${num2}) .`);
        } else {
            console.log(`Las calificaciones son iguales ${num1} = ${num2}.`);
        }
        rl.close();
    });
});