let nodoHijo = document.body.children[0];
console.log(nodoHijo);

let contenidoParrafo = document.getElementById("parrafo Lorem");
console.log(contenidoParrafo.innerHTML); //innerHTML es para recibir un texto plano

contenidoParrafo.innerHTML =
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito. - Albert Schweitzer"; // asi es como se reemplaza un texto que ya esta en una variable por otra
console.log(contenidoParrafo.innerHTML);

// acceder a los elementos por medio de sus clases
// let paises = document.getElementsByClassName("paises");
// console.log(paises[0].innerHTML); // cuando usamos el [] es para llamar a una posicion  especifica
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);
// console.log(paises[3].innerHTML);
// // console.log(paises); // me muestra un HTMLcollection de todos los nodos (paises)

// paises.innerHTML = "Grecia"; //Agrega el pais a la lista
// console.log(paises.innerHTML);

// let parrafo = document.getElementsByTagName("p");
// console.log(parrafo);

// console.dir(document);
// console.dir(document.head);
// console.dir(document.body);

//recorriendo Nodos
// let paises = document.getElementsByClassName("paises");

// for (const pais of paises) {
//   console.log(pais.innerHTML);
// }

//Creando un nuevo elemento HTML
let nuevoParrafo = document.createElement("p");
nuevoParrafo.innerHTML = <b>"Hola, este es un nuevo parrafo"</b>;
