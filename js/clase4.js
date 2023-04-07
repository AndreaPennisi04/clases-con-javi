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

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva = (x) => x * 0.21;
let precioProducto = 1000;
let descuento = 50;
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio);

// function wrapping(gifts) {
//   const wrappedGifts = [];

//   for (const gift of gifts) {
//     const length = gift.length;
//     const totalChars = length + 4;
//     const wrappedGift = new Array(totalChars).fill("*");

//     wrappedGift[0] = wrappedGift[totalChars - 1] = "*";
//     wrappedGift[1] = wrappedGift[totalChars - 2] = " ";

//     const mid = Math.floor(totalChars / 2);
//     for (let i = 0; i < length; i++) {
//       wrappedGift[mid - Math.floor(length / 2) + i] = gift[i];
//     }

//     wrappedGifts.push(wrappedGift.join("") + "\n");
//   }

//   return wrappedGifts;
// }

// const gifts = ["cat", "game", "socks"];
// const wrapped = wrapping(gifts);

// console.log(wrapped);
