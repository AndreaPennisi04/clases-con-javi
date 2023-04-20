// //Higher Order Functions II
// const pi = Math.PI;
// console.log(Math.ceil(pi * 20));
// console.log(Math.floor(pi - 50));
// console.log(Math.round(pi + 90));

// // let valor = parseInt(prompt("Ingrese un numero"));
// // alert((Math.PI * valor).toFixed(2));

// //Max Min
// console.log("Max: " + Math.max(10, 3, 4, 8, 23, 79, 82));
// console.log("Min: " + Math.min(10, 3, 4, 8, 23, 79, 82));

// //Square Root
// function calc(a, b) {
//   return Math.sqrt(a * a + b * b);
// }
// console.log(calc(4, 6));

// function calcHypotenuse(a) {
//   return Math.sqrt(a);
// }
// console.log(calcHypotenuse(-4));
// console.log(calcHypotenuse(9));
// console.log(calcHypotenuse(4));
// console.log(calcHypotenuse(2));

// //Random
// function random(a, b) {
//   return Math.random(a / b);
// }

// console.log(150 / 20);
// console.log(Math.ceil(150 / 20));
// console.log(Math.floor(150 / 20));
// console.log(Math.round(150 / 20));

// // números entre 0 y 10
// console.log(Math.random() * 10);
// // números entre 0 y 50
// console.log(Math.random() * 50);
// // números entre 20 y 50
// console.log(Math.random() * 30 + 20);

// //Round with Random
// const generadorNumero = () => {
//   return Math.round(Math.random() * 50);
// };
// console.log(generadorNumero());
// /* Al usar Math.round, esta función retornará números aleatorios en el rango de 0-100 inclusive. Si usara Math.ceil los números irían de 1 a 100,
// ya que siempre redondeará hacia arriba; y si usa Math.floor el rango sería de 0 a 99.*/

// // const numeroAleatorio = (valor) => {
// //   return Math.round(Math.random() * valor);
// // };
// // let numeroIngresar = prompt("Ingrese un valor");
// // alert("El numero es " + numeroIngresar + " El numero aleatorio es " + numeroAleatorio(numeroIngresar));

// //Clase Date
// console.log(new Date()); //Solo con un console log escrito de esta forma, me trajo el siguiente Dia de hoy: Thu Apr 20 2023 10:28:23 GMT+0100 (British Summer Time)

// //Aca traae la fecha con hora 00:00:00 ya que no esta establecida
// console.log(new Date(2023, 1, 15)); //Wed Feb 15 2023 00:00:00 GMT+0000 (Greenwich Mean Time)

// const day = new Date(new Date()); // Aca lo que hago es que a traves de una variable me traiga el dia actual constantemente pero solo cuando se carga la pagina
// console.log(day);

// //Date en dormato String
// const casiPorLaMitad = new Date("April 20, 2023 10:39:59");
// console.log(casiPorLaMitad);

// //Obtener un valor singular de la fecha
// // const hoy = new Date("2023");//Así, solo con el año, toma como referencia el primer dia y mes del año
// // const hoy = new Date("20, 4, 2023");// Asi te lo toma invalido, no lo puede leer
// const hoy = new Date("July 3, 2021");
// console.log(hoy.toDateString()); //Sat Jul 03 2021
// console.log(hoy.toLocaleString()); //03/07/2021, 00:00:00
// console.log(hoy.toLocaleDateString()); //03/07/2021
// console.log(hoy.toTimeString()); //00:00:00 GMT+0100 (British Summer Time)

// //Fecha personalizada
// const fecha = new Date();
// const fechaPersonalizada = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getYear(); //Este esta mal
// console.log(fechaPersonalizada);

// /*Diferencias entre fechas: Los resultados de las diferencias entre fechas se generan en milisegundos.
// Para calcular la diferencia de dias entre fechas dos fechas, habria que hacer un calculo (de todas maneras
// hay librerias que lo hacen)*/
// const cumplePancho = new Date("March 3, 2013");
// const cumpleMateo = new Date("July 3, 2021");
// const today = new Date("April 20, 2023");

// console.log(cumplePancho - cumpleMateo);
// console.log(cumplePancho - cumpleMateo - today);

// const milisegundosPorDia = 86400000;

// console.log((cumpleMateo - cumplePancho) / milisegundosPorDia); // 3043.9583333333335

// //Otro ejemplo de diferencias entre fechas (Esto no lo entendi)
// const inicio = new Date();

// for (let i = 0; i < 1000; i++) {
//   //1000 son mil milisegundos
//   console.log("haciendo tiempo");
// }

// const final = new Date();

// console.log("El proceso tardó: " + (final - inicio) + " milisegundos");

let fechaActual = new Date();
let nextBirthDay = new Date(prompt("Ingrese la fecha de su cumpleaños proximo año: DD-MM-AAAA"));
let milisegundosPorDia = 3600 * 24 * 1000;
let calculo = Math.round((nextBirthDay - fechaActual) / milisegundosPorDia);
console.log("Quedan " + calculo + " dias para tu proximo cumpleaños");
