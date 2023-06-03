let nodoHijo = document.body.children[0];
console.log(nodoHijo);

let contenidoparrafo2 = document.getElementById("parrafo2 Lorem");
console.log(contenidoparrafo2.innerHTML); //innerHTML es para recibir un texto plano

contenidoparrafo2.innerHTML =
  "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estás haciendo, tendrás éxito. - Albert Schweitzer"; // asi es como se reemplaza un texto que ya esta en una variable por otra
console.log(contenidoparrafo2.innerHTML);

// acceder a los elementos por medio de sus clases
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML); // cuando usamos el [] es para llamar a una posicion  especifica
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
console.log(paises[3].innerHTML);
// console.log(paises); // me muestra un HTMLcollection de todos los nodos (paises)

paises.innerHTML = "Grecia"; //Agrega el pais a la lista
console.log(paises.innerHTML);

let parrafo21 = document.getElementsByTagName("p");
console.log(parrafo2);

console.dir(document);
console.dir(document.head);
console.dir(document.body);

//recorriendo Nodos
let paises = document.getElementsByClassName("paises");

for (const pais of paises) {
  console.log(pais.innerHTML);
}

//Creando un nuevo elemento HTML
let nuevoparrafo2 = document.createElement("p");
nuevoparrafo2.innerHTML = <b>"Hola, este es un nuevo parrafo2"</b>;

/* Agregar o quitar Nodes*/

// document.createElement(),// Luego debe agregarse como hijo el nodo creado con append(), al body o a otro nodo del documento actual.
// let paragrah = document.createElement("p");
// paragrah.innerHTML = "<h2>Creando un nodo de tipo Elemento como aprrafo e insertando HTML interno</h2>";
// document.body.append(parrafo2);

// //eliminar elementos usando "Remove"
let text = document.createElement("p");
text.innerHTML =
  "<h2 id='parrafo2' >La vida es un misterio sobre el que todos reflexionamos en algún momento. Comprender qué es lo más importante en nuestro mundo nos ayuda a enfocarnos y a ser felices. Pero, como decía, no es algo nuevo. Llevamos años preguntándonos qué es la vida y hay quienes han llegado a grandes conclusiones que se materializan en estas citas que te ayudarán a sentirte motivado, a reflexionar y a mantenerte positiva hoy.</h2>";
document.body.append(text);

let parrafo2s = document.getElementById("parrafo2");
parrafo2.remove();

//Datos inputs
//Codigo HTML de referencia
// input id = "nombre" type="text"
// input id = "edad"   type="number"

// document.getElementById("nombre").value = "HOMERO";
// document.getElementById("edad").value = 39;

//opciones desde un Array
let padre = document.getElementById("personas");
let personas = ["Andrea", "Diego", "Pancho", "Mateo"];
for (const persona of personas) {
  let li = document.createElement("li");
  li.innerHTML = persona;
  padre.appendChild(li);
}

//Plantillas literales
let producto1 = { id: 1, nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto1.id + " - producto1: " + producto1.nombre + "$ " + producto1.precio; //forma vieja y tradicional
let plantilla = `ID: ${producto1.id} - producto1 ${producto1.nombre} $ ${producto1.precio}`; //Forma nueva y la mas usada
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);

//Plantillas Literales e innerHTML: esto hereda al HTML y lo agrega a la pagina que vemos no en el console.log. Agregamos el contenedor creado al body
let producto2 = { id: 1, nombre: "Arroz", precio: 125 };
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto2.id}</h3>
                        <p>  producto1: ${producto2.nombre}</p>
                        <b> $ ${producto2.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);

//Creando elementos desde objetos usando innerHTML para que se vea desde la pagina
const producto1s = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

for (const producto1 of producto1s) {
  let contenedor = document.createElement("div");
  //   //Definimos el innerHTML del elemento con una plantilla de texto
  contenedor.innerHTML = `<h3> ID: ${producto1s.id}</h3>
                            <p>  producto1: ${producto1s.nombre}</p>
                            <b> $ ${producto1s.precio}</b>`;
  document.body.appendChild(contenedor);
}

//Query Selector

//puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
let parrafo2 = document.querySelector("#contenedor p");
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor");

// o por clase:
parrafo2 = document.querySelector(".texto");

//let radioChecked = document.querySelector(".radio:checked");
//radioChecked();
