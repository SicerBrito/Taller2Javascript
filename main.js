/* Ejercicio #5 Taller 2 Javascript 
Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo.*/

let seguir = true;

do {
    let num1 = parseFloat(prompt("Ingrese un numero."));
    let num2 = parseFloat(prompt("Ingrese otro numero."));

    let suma = (num1 + num2);
    let resta = (num1 - num2);
    let divison = (num1 / num2);
    let mult = (num1 * num2);
    if (num1 > num2){
        alert(`El numero mayor es ${num1}`)
        alert(`La suma de ${num1} + ${num2} es ${suma}`)
        alert(`La resta de ${num1} - ${num2} es ${resta}`)
    } else if (num2 > num1) {
        alert(`El numero mayor es ${num2}`);
        alert(`La division de ${num1} / ${num2} es ${divison}`);
        alert(`La multiplicacion de ${num1} * ${num2} es ${mult}`);
    }


seguir = confirm("Desea ingresar mas datos?");
    
} while (seguir);

