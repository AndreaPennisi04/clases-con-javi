// function diaCotidiano() {
//   console.log("Levantarse de la cama");
//   vestirse();
//   irAlBano();
//   cepillarseLosDeintes();
//   console.log("preparar desayuno");
//   console.log("Seguir con el dia");
// }

// function vestirse() {
//   console.log("vestirse");
// }
// function irAlBano() {
//   console.log("Ir al baño");
// }
// function cepillarseLosDeintes(modo) {
//   if (modo == "Comio ajo") {
//     console.log("lavarme los dientes y usar enjuague bucal");
//   } else {
//     console.log("lavarme los dientes");
//   }
// }

// diaCotidiano();

// function cerrandoElDia() {
//   console.log("Preparar la cena");
//   console.log("Levantar la mesa");
//   irAlBano();
//   cepillarseLosDeintes("Comio ajo");
//   console.log("Acostarse a dormir");
// }
// cerrandoElDia();

//darle un numero
// numero *1.21
// resultado (return)

// function calcualrIva(firstNumber) {
//   //   console.log(typeof firstNumber);
//   if (isNaN(firstNumber)) {
//     return "Ingrese un numero";
//   }
//   return firstNumber * 1.21;
// }

// console.log(calcualrIva(100));

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// //Si una función es una sola línea con retorno y un parámetro puede evitar escribir los {}
// const iva = (x) => x * 0.21;
// let precioProducto = 1000;
// let descuento = 50;
// //Calculo el precioProducto + IVA - descuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// console.log(nuevoPrecio);

//Ejercico
/*Crear una función que calcule el IMC de una persona.
Desarrollar:
- Función: calculoIMC(altura, peso) devuelva un valor entero. (Realizar cálculo del imc)
- Función: estadoSalud(valor) devuelva el estado de salud. (Ej. “Peso normal”)
- Función: calcularIMC() solicitar el peso y la altura, y debería llamar a las 2 funciones anteriores.
- Validar todas las entradas de datos*/

let altura, peso;

const validacionEntradas = () => {
  if (isNaN(altura) || isNaN(peso)) {
    return false;
  }
  if (altura <= 0 || peso <= 0) {
    return false;
  }
  return true;
};

const calculoIMC = () => {
  return Math.round(peso / altura ** 2);
};

const estadoSalud = (valor) => {
  if (valor <= 18.5) {
    return "Su estado de salud es Bajo Peso";
  } else if (valor >= 18.5 && valor <= 25) {
    return "Su estado de salud es normal o su peso es normal";
  } else if (valor >= 25.0 && valor <= 30) {
    return "Su estado de salud está dentro de los valores correspondientes a Sobrepeso";
  } else {
    return "Obesidad";
  }
};

const calcularIMC = () => {
  altura = parseFloat(prompt("Ingrese su altura en metros:"));
  peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));

  if (validacionEntradas()) {
    let imc = calculoIMC();
    let salud = estadoSalud(imc);
    alert("Su IMC es " + imc + " y " + salud);
  } else {
    alert("Ingrese valores válidos para altura y peso.");
  }
};

calcularIMC();
