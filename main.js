/* Ejercicio #6 Taller 2 Javascript 
Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes, que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.*/


let estudiantes = [];

let cantidadEstudiantes = prompt("Ingrese la cantidad de estudiantes que va a registrar:");

for(let i = 0; i < cantidadEstudiantes; i++) {
  let nombre = prompt(`Ingrese el nombre del estudiante a registrar. (${i+1}):`);
  let sexo = prompt(`Ingrese el sexo del estudiante ${nombre}. (${i+1}) (M o F):`);
  let notaDefinitiva = parseFloat(prompt(`Ingrese la nota definitiva del estudiante ${nombre}. (${i+1}):`));

  let estudiante = {
    nombre: nombre,
    sexo: sexo,
    notaDefinitiva: notaDefinitiva,
  };
  estudiantes.push(estudiante);
}

let estudianteMayorNota = estudiantes[0];
for(let i = 1; i < estudiantes.length; i++) {
  if(estudiantes[i].notaDefinitiva > estudianteMayorNota.notaDefinitiva) {
    estudianteMayorNota = estudiantes[i];
  }
}

let estudianteMenorNota = estudiantes[0];
for(let i = 1; i < estudiantes.length; i++) {
  if(estudiantes[i].notaDefinitiva < estudianteMenorNota.notaDefinitiva) {
    estudianteMenorNota = estudiantes[i];
  }
}

let cantidadHombres = 0;
let cantidadMujeres = 0;
for(let i = 0; i < estudiantes.length; i++) {
  if(estudiantes[i].sexo.toUpperCase() === "M") {
    cantidadHombres++;
  } else if(estudiantes[i].sexo.toUpperCase() === "F") {
    cantidadMujeres++;
  }
}

alert(`El estudiante con la mayor nota es ${estudianteMayorNota.nombre} con una nota de ${estudianteMayorNota.notaDefinitiva}`);
alert(`El estudiante con la menor nota es ${estudianteMenorNota.nombre} con una nota de ${estudianteMenorNota.notaDefinitiva}`);
alert(`Hay ${cantidadHombres} hombres y ${cantidadMujeres} mujeres en el grupo de estudiantes.`);