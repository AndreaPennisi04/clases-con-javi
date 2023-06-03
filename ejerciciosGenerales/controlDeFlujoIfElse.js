let nombreIngresado = prompt("Ingresar nombre");

if (nombreIngresado != "" && (nombreIngresado == "EMA" || nombreIngresado == "ema")) {
  alert(`Hola ${nombreIngresado}`); // de esta forma valida que sea nombre en mayuscula o minuscula no es necesario upper o lower case
} else {
  alert("Error: Ingresar nombre valido");
}
//Es distinto
let nombreIngresado1 = prompt("Ingresar nombre");
if ((nombreIngresado1 != "" && nombreIngresado1 == "EMA") || nombreIngresado1 == "ema") {
  alert(`Hola ${nombreIngresado1}`); // de esta forma valida que sea nombre en mayuscula o minuscula no es necesario upper o lower case
} else {
  alert("Error: Ingresar nombre valido");
}

/*Crear un algoritmo con un condicional
 Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, 
 en función de ciertas condiciones, muestre un resultado.
*/
