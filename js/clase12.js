//Sugar Sintax
let sugarSintax = 50;
valor = sugarSintax + 1; // valor seria el nombre de la variable donde se suma la primer variable (sugarsintax) +1
//valor += 1; // me tra el valor guardado en la linea 3 que es 51 y le suma un numero mas por loq ue queda 52
//valor++; // me tra el valor guardado en la linea 3 que es 51 y le suma un numero mas por loq ue queda 52 (Se usa sugar sintax)
valor += 100; // trae el nuevo valor de la linea 3 que es 51 y le suma 100, esto queda en 151
valor--; // resta
console.log(valor); // 51

// Esto de aca arriba es un poco de la forma en la que veniamos trabajando con el for

// for (let index = 0; index < 10; index++) {
//   const element = array[index];
// }

//Operador Ternario
//Forma tradicional
let weather = 35;
if (weather > 30) {
  alert("Que calor!");
} else {
  alert("Esta calido!");
}

//Codigo simplificado con ternario
let temperatura = 25;
temperatura > 25 ? alert("hace calor") : alert("Esta lindo"); //esto seria como If Else
//con mas de un If
temperatura > 30 ? alert("hace calor") : temperatura > 20 ? alert("Esta lindo") : alert("Esta fresco");

//Operador ternario con un return Implicito

let usuario = {
  nombre: "Pancho Di4",
  edad: 10,
};

let permiso;

if (usuario.edad >= 18) {
  permiso = true;
} else {
  permiso = false;
}

if (permiso) {
  alert("Tiene permiso para ingresar a la disco");
} else {
  alert("Permiso denegado por ser menor a 18 años");
}
