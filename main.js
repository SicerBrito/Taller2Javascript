/* Ejercicio #9 Taller 2 Javascript 
N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */

let atletas = [];

let numFin = parseInt(prompt("Ingrese el número de atletas finalistas: "));

for (let i = 0; i < numFin; i++) {
  let nombre = prompt(`Ingrese el nombre del atleta #${i+1}: `);
  let marca = parseFloat(prompt(`Ingrese la marca en metros de ${nombre}: `));
  
  let atleta = {
    nombre: nombre,
    marca: marca
  }
  
  atletas.push(atleta);
}

let campeona = atletas[0];

for (let i = 1; i < atletas.length; i++) {
  if (atletas[i].marca > campeona.marca) {
    campeona = atletas[i];
  }
}

if (campeona.marca > 15.50) {
  alert(`La atleta campeona es ${campeona.nombre} y ha batido el récord con una marca de ${campeona.marca} metros. Recibirá un premio de 500 millones.`);
} else {
  alert(`La atleta campeona es ${campeona.nombre} con una marca de ${campeona.marca} metros.`);
}