import readline from "node:readline";

//Definición de la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Función para solicitar datos
function preguntar(mensaje) {
    return new Promise(function(resolve) {
        rl.question(mensaje, function(respuesta) {
            resolve(respuesta);
        });
    });
}

//Funciones para calcular el área y perímetro del círculo
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

//Funciones para calcular el área y perímetro del cuadrado
function calcularAreaCuadrado(lado) {
    return lado * lado;
}

function calcularPerimetroCuadrado(lado) {
    return lado * 4;
}

//Funciones para calcular el área y perímetro del rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

//Funciones para calcular el área y perímetro del triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

//Función para validar números positivos
function esPositivo(numero) {
    return Number.isFinite(numero) && numero > 0;
}

//Proceso principal
async function iniciarPrograma() {

    let opcion;

    do {
        //Mostrar el menú
        console.log("\n===== FIGURAS GEOMETRICAS =====");
        console.log("1. Circulo");
        console.log("2. Cuadrado");
        console.log("3. Rectangulo");
        console.log("4. Triangulo");
        console.log("5. Salir");

        opcion = Number(await preguntar("Seleccione una figura: "));

        //Evaluar la figura seleccionada
        switch (opcion) {

            case 1: {
                let radio = Number(await preguntar("Ingrese el radio del circulo: "));

                if (!esPositivo(radio)) {
                    console.log("El radio debe ser un numero mayor que cero.");
                    break;
                }

                console.log(`Area: ${calcularAreaCirculo(radio).toFixed(2)}`);
                console.log(`Perimetro: ${calcularPerimetroCirculo(radio).toFixed(2)}`);
                break;
            }

            case 2: {
                let lado = Number(await preguntar("Ingrese el lado del cuadrado: "));

                if (!esPositivo(lado)) {
                    console.log("El lado debe ser un numero mayor que cero.");
                    break;
                }

                console.log(`Area: ${calcularAreaCuadrado(lado).toFixed(2)}`);
                console.log(`Perimetro: ${calcularPerimetroCuadrado(lado).toFixed(2)}`);
                break;
            }

            case 3: {
                let base = Number(await preguntar("Ingrese la base del rectangulo: "));
                let altura = Number(await preguntar("Ingrese la altura del rectangulo: "));

                if (!esPositivo(base) || !esPositivo(altura)) {
                    console.log("La base y la altura deben ser mayores que cero.");
                    break;
                }

                console.log(`Area: ${calcularAreaRectangulo(base, altura).toFixed(2)}`);
                console.log(`Perimetro: ${calcularPerimetroRectangulo(base, altura).toFixed(2)}`);
                break;
            }

            case 4: {
                let base = Number(await preguntar("Ingrese la base del triangulo: "));
                let altura = Number(await preguntar("Ingrese la altura del triangulo: "));
                let lado1 = Number(await preguntar("Ingrese el primer lado: "));
                let lado2 = Number(await preguntar("Ingrese el segundo lado: "));
                let lado3 = Number(await preguntar("Ingrese el tercer lado: "));

                if (
                    !esPositivo(base) ||
                    !esPositivo(altura) ||
                    !esPositivo(lado1) ||
                    !esPositivo(lado2) ||
                    !esPositivo(lado3)
                ) {
                    console.log("Todos los valores deben ser mayores que cero.");
                    break;
                }

                //Comprobar que los lados formen un triangulo
                if (
                    lado1 + lado2 <= lado3 ||
                    lado1 + lado3 <= lado2 ||
                    lado2 + lado3 <= lado1
                ) {
                    console.log("Los lados ingresados no forman un triangulo valido.");
                    break;
                }

                console.log(`Area: ${calcularAreaTriangulo(base, altura).toFixed(2)}`);
                console.log(`Perimetro: ${calcularPerimetroTriangulo(lado1, lado2, lado3).toFixed(2)}`);
                break;
            }

            case 5:
                console.log("Programa finalizado.");
                break;

            default:
                console.log("Opcion no valida. Seleccione una opcion del 1 al 5.");
                break;
        }

    } while (opcion !== 5);

    rl.close();
}

//Ejecutar el programa
iniciarPrograma();