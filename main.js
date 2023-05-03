/* Ejercicio #4 Taller 2 Javascript 
Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.*/

let seguir = true;

do {
alert("Digite 3 nombres diferentes junto a su edad correspondiente.");
let nombre1 = prompt("Ingrese un nombre.");
let edad1 = parseFloat(prompt(`Ingrese la edad de ${nombre1}.`));
let nombre2 = prompt("Ingrese un nombre.");
let edad2 = parseFloat(prompt(`Ingrese la edad de ${nombre2}.`));
let nombre3 = prompt("Ingrese un nombre.");
let edad3 = parseFloat(prompt(`Ingrese la edad de ${nombre3}.`));



let nombreMayorEdad = "";
if (edad1 > edad2 && edad1 > edad3) {
  nombreMayorEdad = nombre1;
  mayorEdad = edad1;

} else if (edad2 > edad1 && edad2 > edad3) {
  nombreMayorEdad = nombre2;seguir = confirm("Desea ingresar otro número?");

  mayorEdad = edad2;

} else {
  nombreMayorEdad = nombre3;
  mayorEdad = edad3;

}

alert(`La persona con mayor edad es: ${nombreMayorEdad} con ${mayorEdad} años`);

seguir = confirm("Desea ingresar mas datos?");

} while (seguir);

