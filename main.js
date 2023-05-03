/* Ejercicio #7 Taller 2 Javascript 
Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.*/


let productos = [];
let respuesta;

do {
  let nombreProd = prompt("Ingrese el nombre del producto.");
  let precio = parseFloat(prompt(`Ingrese el precio de ${nombreProd}.`));
  let cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombreProd} que va a llevar.`));
  
  let total = precio * cantidad;
  
  let producto = {
    nombre: nombreProd,
    precio: precio,
    cantidad: cantidad,
    total: total
  }
  
  productos.push(producto);

  respuesta = prompt("¿Desea ingresar otro producto? (s/n)").toUpperCase(); 

  
} while (respuesta === "S");

  let totalPagar = 0;
  
  for (let i = 0; i < productos.length; i++) {
    totalPagar += productos[i].total;
  };
  
  let factura = productos.map(
    (producto) => `${producto.nombre}: $${producto.cantidad} x $${producto.precio} = $${producto.total}`
  );
  
  factura.push(`Total a pagar: $${totalPagar}`);


alert(`Factura:
${factura.join("\n")}
`);

/* si el precio de un producto es 4.5, al utilizar toFixed(2) se obtendrá la cadena "4.50", que es la representación del número con dos decimales. */
/* La función map() se utiliza para crear un nuevo array con los detalles de cada producto en el formato deseado */
/* la función join("\n") se utiliza para unir los elementos del array con un salto de línea entre ellos. */