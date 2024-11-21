/**
 Se desea llevar un control de los préstamos que
realiza una oficina. Se tiene por cada préstamo: nombre
del cliente, código del préstamo, monto y cantidad de
meses. Se requiere de un programa que permita el
registro de esta información, conociendo al principio de
la ejecución el monto disponible para préstamos y el
porcentaje de comisión mensual que se cobrará.
Estructuras de datos recomendadas
 Cl_oficina: montoCaja, porcComisionMensual
 Cl_prestamo: cliente, codigo, prestamo, meses
Primeros requerimientos
 Los datos entrada vienen en un archivo (con
import... ver anexo)
 Monto final disponible
 Clientes que pidieron por 2 meses
 Clientes que pidieron el préstamo mínimo 
 */

import Cl_oficina from "./Cl_oficina.js";
import Cl_prestamo from "./Cl_prestamo.js";
import Dt_oficina from "./Dt_oficina.js";
import Dt_prestamos from "./Dt_prestamos.js";

const oficina = new Cl_oficina(
  Dt_oficina.montoDisponible,
  Dt_oficina.porcComisionMensual
);

Dt_prestamos.forEach((prestamo) =>
  oficina.agregarPrestamo(
    new Cl_prestamo(
      prestamo.cliente,
      prestamo.codigo,
      prestamo.prestamo,
      prestamo.meses
    )
  )
);

let montoFinal = (oficina, salida) => {
  let monto = oficina.montoFinal();
  salida.innerHTML = `<br>Monto final despues de los prestamos:`;
  salida.innerHTML += `<br>${monto}`;
};

let clientesPorDosMeses = (oficina, salida) => {
  let prestamos = oficina.clientesPorDosMeses();
  salida.innerHTML = `<br>Clientes que pidieron por 2 meses:`;
  prestamos.forEach((prestamo) => {
    salida.innerHTML += `<br>${prestamo.cliente} ${prestamo.codigo} ${prestamo.aPagar}`;});
};

let clienteMenorPrestamo = (oficina, salida) => {
  let prestamos = oficina.personaMenorPrestamo();
  salida.innerHTML = `<br>Clientes que pidieron el menor prestamo:`;
  prestamos.forEach((prestamo) => {
    salida.innerHTML += `<br>${prestamo.cliente} ${prestamo.codigo} ${prestamo.aPagar}`;});
};

let agregarPrestamo = (oficina) => {
  let nombre = prompt("Ingrese el nombre del cliente:");
  let codigo = prompt("Ingrese el codigo del prestamo:");
  let monto = prompt("Ingrese el monto del prestamo:");
  let meses = prompt("Ingrese los meses de prestamo:");
  oficina.agregarPrestamo(new Cl_prestamo(nombre, codigo, monto, meses));
};

let eliminarPrestamo = (oficina) => {
  let codigo = prompt("Ingrese el codigo del prestamo que quiere eliminar:");
  if (oficina.eliminarPrestamo(codigo))
    alert(`Se eliminó el prestamo ${codigo}`);
  else alert(`No existe el prestamo ${codigo}`);
};

let listarPrestamos = (oficina, salida) => {
  salida.innerHTML = "";
  salida.innerHTML += "<br> Cliente - Codigo - Meses - Prestamo - Total - Por Pagar"
  oficina.prestamos.forEach((prestamo) => {
    salida.innerHTML += 
    `<br>
    ${prestamo.cliente} 
    --
    ${prestamo.codigo}
    -- 
    ${prestamo.meses}
    -- 
    ${prestamo.prestamo}
    --
    ${prestamo.montoPrestamo()}
    --
    ${prestamo.aPagar}
    `;
  });
};

let salida1 = document.getElementById("salida1"),
  salida2 = document.getElementById("salida2"),
  opciones = document.getElementById("opciones");

salida1.innerHTML = `<br>Seleccione una opción:
  <br>1= Agregar prestamo
  <br>2= Listar prestamos
  <br>3= Eliminar prestamo
  <br>4= Monto final disponible
  <br>5= Clientes que pidieron por dos meses
  <br>6= Clientes que pidieron el prestamo minimo`;

opciones.onclick = () => {
  let opcion = +prompt("Seleccione su opción:");
  switch (opcion) {
    case 1:
      agregarPrestamo(oficina);
      break;
    case 2:
      listarPrestamos(oficina, salida2);
      break;
    case 3:
      eliminarPrestamo(oficina);
      break;
    case 4:
      montoFinal(oficina, salida2);
      break;
    case 5:
      clientesPorDosMeses(oficina, salida2);
      break;
    case 6:
      clienteMenorPrestamo(oficina, salida2);
      break;
  }
};
