const mix = [
  "andrea",
  "Pancho",
  "Diego",
  "Mateo",
  ["Argentina", "Escocia"],
  ["Netflix", "Disney", "Amazon", "Now", ["Sailor Moon", "Los simposon", "Dark", [1992, 1986, 2018]], false, true],
];
console.log(mix);

//Para llamar a un elemento dentro del array
const seriesFav = [
  "Sailor Mon",
  "Dark",
  "Behaind her eyes",
  { cast: ["Serena", "Daryen", "Amy", "Rei", "Lita", "SailorVenus"] },
];
console.log(seriesFav[0]);
console.log(seriesFav[3].cast[1]); /*en este caso como estoy llamando a un elemento que es un objeto (cast)dentro del 
array tengo que primero llamar la posicion de ese elemento dentro del array [3] y una vez que llama a ese elemento
colocar el nombre del objeto (cast) y lugo llamar el numero del array que esta dentro de ese objeto [1]*/

//Para saber la longitud del array usamos length
console.log(seriesFav.length);

//Forma correcta de un bucle for
for (let i = 0; i < seriesFav.length; i++) {
  console.log(seriesFav[i]);
}

// Reasignar un valor
seriesFav[3].cast[5] = "Mina";
console.log(seriesFav[3].cast[5]);
