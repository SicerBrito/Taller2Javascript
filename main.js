/* Ejercicio #2 Taller 2 Javascript 
Dado un número indicar si es par o impar y si es mayor de 10.*/


let seguir = true;

do {
  let numeroIngr = prompt("Ingrese un numero:");
  let parImpar = (numeroIngr) % 2;

  if (!isNaN(numeroIngr)) {
    if (parImpar == 0) {
      if (numeroIngr > 10) {
        alert(`El numero ${numeroIngr} es par y Mayor a 10.`);
      } else {
        alert(`El numero ${numeroIngr} es par.`);
      }
    } else if (parImpar != 0) {
      if (numeroIngr > 10) {
        alert(`El numero ${numeroIngr} es impar y Mayor a 10.`);  
      } else {
        alert(`El numero ${numeroIngr} es impar.`);
      }
    }
  } else {
    alert("Por favor ingresa un número válido.");
  }

  seguir = confirm("Desea ingresar mas datos?");
} while (seguir);

