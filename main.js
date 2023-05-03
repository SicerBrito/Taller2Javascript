/* Ejercicio #1 Taller 2 Javascript 
Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado".*/


let seguir = true;

do {
alert("A continuacion te vamos a pedir tres notas para definir tu promedio. (Se sincero)");

let nota1 = prompt("Ingrese la Primera nota. (Min. 0.0   Max 5.0)");
    if  (nota1 > 5) {
        alert("Digito mal la nota por favor siga las instrucciones retrasado. Muchas gracias 😁")
    };
let nota2 = prompt("Ingrese la Segunda nota. (Min. 0.0   Max 5.0)");
    if  (nota2 > 5) {
        alert("Digito mal la nota por favor siga las instrucciones retrasado. Muchas gracias 😁")
    };
let nota3 = prompt("Ingrese la Tercera nota. (Min. 0.0   Max 5.0)");
    if  (nota3 > 5) {
        alert("Digito mal la nota por favor siga las instrucciones retrasado. Muchas gracias 😁")
    };

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);

let promedio = (nota1 + nota2 + nota3) / 3;

alert(`El promedio de las tres notas es: ${promedio}`);
if (promedio >= 40) {
    alert("Becado");
} else if (promedio <= 39) {
    alert("Estudie Pendejo");
    alert(`${promedio} que es esa nota por favor 😂😂😂😂`)
};

seguir = confirm("Desea ingresar mas datos?");
} while (seguir);

