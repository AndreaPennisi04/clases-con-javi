// for (let i = 1; i <= 20; i++) {
//   console.log("Numero de vueltas: " + i);
// }

// let ingreseNumero = parseInt(prompt("Ingresar Numero"));

// for (let i = 1; i <= 10; i++) {
//   let result = ingreseNumero * i;
//   alert(ingreseNumero + "X" + i + "=" + result);
// }

// for (let i = 10; i >= 1; i--) {
//   alert(i);
// }

// for (let i = 1; i <= 10; i++) {
//   //Si la variable i es igual 5 interrumpo el for.
//   if (i == 5) {
//     continue;
//   }
//   alert(i);
// }

// let nombre = prompt("Ingrese un nombre");

// do {
//   alert("Ingresaste: " + nombre);
//   nombre = prompt("Ingresa otro nombre: ");
// } while (nombre.toLowerCase() != "CARLOS");

const IVA = 21;
const MAX_IMPORTE = 100000;
const MAX_PRODUCTOS = 5;
const descuento = 10;

let contadorProducto = 0;
let sumaProducto = 0;
let valido = true;
let totalConIva;

while (valido) {
  let importe = parseFloat(prompt("Ingrese importe: "));
  alert("El importe ingresado es: " + importe);

  contadorProducto++;
  if (contadorProducto >= MAX_PRODUCTOS) break;

  sumaProducto = sumaProducto + importe;
  if (sumaProducto >= MAX_IMPORTE) break;

  let ivaAplicado = (importe * IVA) / 100;

  totalConIva = totalConIva + importe + ivaAplicado;
  console.log("IVA a pagar: " + ivaAplicado);

  if (importe >= MAX_IMPORTE) {
    let descuentoAplicado = (importe * descuento) / 100;
    totalConIva = totalConIva - descuentoAplicado;
    console.log("Descuento: " + descuentoAplicado);
  }
}

console.log("Total con IVA y descuento: " + totalConIva);
console.log("Se ingreasaron" + contadorProducto++);
