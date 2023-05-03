/* Ejercicio #10 Taller 2 Javascript 
Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR */

let numeros = [];
let numero;
let suma = 0;
let contador = 0;

do {
  numero = parseFloat(prompt("Ingrese un número (0 para salir):"));
  
  if (numero !== 0 && !isNaN(numero)) {
    numeros.push(numero);
    suma += numero;
    contador++;
  }

} while (numero !== 0);

let promedio = (suma / contador).toFixed(2);

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);

alert(`La sumatoria de los valores es: ${suma}`);
alert(`El valor del promedio es: ${promedio}`);
alert(`Cantidad de valores digitados: ${contador}`);
alert(`El mayor valor digitado es: ${mayor}`);
alert(`El menor valor digitado es: ${menor}`);