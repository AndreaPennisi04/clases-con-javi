let valor = parseFloat(prompt("Ingrese un valor del 1 al 50"));
let valor1 = parseFloat(prompt("Ingrese segundo valor del 50 al 100"));

if (valor > valor1) {
  alert(`No estas en lo cierto: ${valor1} es mayor a ${valor}`);
} else {
  alert(`"${valor} es mayor a ${valor1}"`);
}

let valor2 = parseFloat(prompt("Ingrese un valor del 1 al 50"));
let valor3 = parseFloat(prompt("Ingrese segundo valor del 50 al 100"));
if ((valor2 = valor3)) {
  alert(`El valor ingresado en ${valor2} y ${valor3} son iguales`);
} else {
  alert("Los valores ingresados son distintos");
}

let valor4 = parseFloat(prompt("Ingrese un valor del 1 al 50"));
let valor5 = parseFloat(prompt("Ingrese segundo valor del 50 al 100"));
if (valor4 <= valor5) {
  alert(`Definitivamente. El valor ${valor5} es mayor o igual a ${valor4}`);
} else {
  alert("incorrecto");
}

let valor6 = parseFloat(prompt("Ingrese un valor del 1 al 50"));
let valor7 = parseFloat(prompt("Ingrese segundo valor del 50 al 100"));
if (valor6 != valor7) {
  alert(`Estas en lo correcto, los valores son distintos`);
} else {
  alert("El valor es igual");
}
