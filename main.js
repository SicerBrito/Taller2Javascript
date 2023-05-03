/* Ejercicio #3 Taller 2 Javascript 
3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.*/

/* E = I x R. */

let seguir = true;

do {
    
let intensidad = prompt("Ingrese la intencidad en amperios.");
let resistencia = prompt("Ingrese la resistencia en ohmios.");

let voltaje = (intensidad * resistencia);

alert(`El voltaje es ${voltaje} voltios`);


seguir = confirm("Desea ingresar mas datos?");
} while (seguir);

