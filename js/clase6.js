// // Acceder al array
// let nombres = ["Naty", "Javi", "Lucia", "Andrea"];
// console.log(nombres);

// let edades = [33, 41, 35, 41];
// console.log("Edad de Javi es: " + edades[1]);

// //Lenght
// let cantidadElementos = miArray.lenght;
// console.log("Total de elementos: " + cantidadElementos);

// for (let i = 0; i < cantidadElementos; i++) {
//   console.log("Nombre: " + nombres[i]);
// }

// //Push agrega al final
// nombres.push("Pepita");
// console.log(nombres);

// //Unshift agrega al comienzo
// nombres.unshift("Lola");
// console.log(nombres);

// // POP elimina un elemento del array. El ultimo
// nombres.pop();
// console.log(nombres);

// // shift elimina un elemento del array. El primero
// nombres.shift();
// console.log(nombres);

// // para reemplazar un nombre por uno nuevo
// nombre[1] = "Veron"; //Esto hace que javier se reemplace por Veron

// //Splice elimina uno o varios elementos del array
// nombres.splice(1, 2); //elimina desde la posicion 1 y 2 seria eliminar dos elementos por eso quitaria javier y luciana
// //eliminar el ultimo
// nombres.splice(-1); //elimina el ultimo

// //JOIN sirve solo para reemplazar por ejemplo la , por el pipe |
// nombres.join("|");
// console.log(nombres);

// //Concat: Sirve para concatenar arrays
// const perros = ["Dylan", "Giuseppe", "Camila"];
// const gatos = ["Mishi", "Fufy", "July"];
// const mascotas = perros.concat(gatos);
// console.log(mascotas);

// //Slice: devuelve una copia de una parte del array de un nuevo array
// const nombres1 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// // masculinos contiene ['Pedro','Miguel']

// //IndexOf: es para saber en que posiciones estan los elementos. si no lo ebncuentra me devuelve un -1
// let position = nombres.indexOf("Lucia");
// console.log("El nombre es: " + position);

// //Includes
// let incluye = nombres.includes("Javier");

// // Reverse: modifica el array original por eso hay que tener cuidado
// const nombres3 = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
// nombres.reverse();
// console.log(nombres);
// // ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']

const eliminar = (nombres) => {
  let index = nombres.indexOf(nombres);
  if (pos > -1) {
    console.log("El nombre esta en la psocion: " + pos);
    nombres.splice(pos, 3);
  }
};

eliminar("andrea");
console.log(nombres);
