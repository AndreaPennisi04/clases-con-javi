//Crea un script en JS que le solicite al usuario ingresar mínimo 1 dato y luego, mediante JavaScript, realiza operaciones sobre los mismos.

const name = prompt("Ingrese nombre");
let lastName = prompt("Ingrese apellido");
alert(`Welcome ${name} ${lastName}`);

let year = prompt("Ingrese edad");
let retirement = prompt("Ingrese edad en la que le gustaria jubilarse");

let favoritePlace = prompt("Ingrese su lugar favorito donde quiera vivir luego de que se jubile");
let calc = year - retirement;
alert(" A usted le quedan " + calc + " años para jubilarse y vivir en " + favoritePlace);
