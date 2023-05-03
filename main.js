/* Ejercicio #8 Taller 2 Javascript 
Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo*/

let opcion = prompt("Seleccione una opción:\n 1. Cuadrado\n 2. Rectángulo");

if (opcion === "1") {
  let lado = parseFloat(prompt("Ingrese el valor del lado del cuadrado:"));
  let perimetro = 4 * lado;
  alert(`El perímetro del cuadrado es ${perimetro}.`);

} else if (opcion === "2") {
  let base = parseFloat(prompt("Ingrese el valor de la base del rectángulo:"));
  let altura = parseFloat(prompt("Ingrese el valor de la altura del rectángulo:"));
  let area = base * altura;
  alert(`El área del rectángulo es ${area}.`);

} else {
  alert("Sigue las instrucciones estupido 🙄");

}