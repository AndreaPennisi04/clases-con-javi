function sumarNumerosEntre(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total += i;
  }
  return total;
}
sumarNumerosEntre(1, 10); // se puede hacer asi
console.log(sumarNumerosEntre(1, 10)); // o asi para mostrar en consola

//Orden Superior: Fuincion returna otra funcio y la otra o reciven otra funcion como parametro

function sumar(numA, numB) {
  return numA + numB;
}
console.log(sumarNumerosEntre(sumar(1, 10), 1000)); // recibiendo otra funcion con parametros

//Metodos de Arrays que son funciones de orden superior
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const triplicados = []; // esto esta vacio pq lo que hago con for each es triplicar los numeros del array numeros

//For each//            (For of recorre cada elemento del array)

numeros.forEach((element) => {
  // for each es como el bucle for
  element = element * 3;
  triplicados.push(element);
});

console.log(numeros); // el array de numeros
console.log(triplicados); // el array de triplicados

//
const listaSuper = [
  {
    productName: "Arroz",
    price: 500,
  },

  { productName: "Lomo", price: 2500 },

  { productName: "Nalga", price: 1450 },

  { productName: "Papa x KG", price: 300 },
];

//Metodo Find: te devuelve solo el primer producto que cumple con la condicion si no esta, devuelve undfefined

const encontrado = listaSuper.find((listaSuper) => listaSuper.price > 2000);
console.log(encontrado);

const noEncontrar = listaSuper.find((listaSuper) => listaSuper.price < 100);
console.log(noEncontrar);

const incluir = listaSuper.find((listaSuper) => listaSuper.productName.includes("Arroz"));
console.log(incluir);

//Some devuelve true or false
const alguno = listaSuper.some((listaSuper) => listaSuper.productName == "Nalga");
console.log(alguno);

//Filter devuelve un array con todos los elementos
const filtrado = listaSuper.filter((listaSuper) => listaSuper.price < 2000);
console.log(filtrado);

// let keyword = prompt("Ingresa el termino de busqueda");
// const otrofiltrado = listaSuper.filter((listaSuper) => listaSuper.productName.includes(keyword));
// console.log(otrofiltrado);

//Map devuelve un array con la misma cantidad de elementos  que el array original, pero le aplicamos una operacion, por ejemplo un array que le aplique el descuento
const precioConDescuento = listaSuper.map((listaSuper) => {
  //cuando escribimos la funciones flecha en una sola linea sin llaves el retrurn esta implicito si la quiero hacer mas larga o retornar algo especifico escribo retur + lo que quiero retornar
  return {
    productName: listaSuper.productName,
    price: listaSuper.price * 0.3, // esto es 0.30 para aplicarle el 60%. para hacer el porcentaje lo hacemos al reves
  };
});
console.log(precioConDescuento);

//Metodo reduce: devuelve la suma total de elementos o valor de propiedades. Toma todos los valores del array, los acuumula y luego realiza la indicacion que le demos y obtiene un solo elemento q es la suma final total
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalArray = numbers.reduce((acumular, numero) => acumular + numero, 0); // el "0" en la parte final es desde donde arrancaria a contar que es 0. Esto quiere decir que acumulador va arrancar en 0
//El Acumulador como la palabra lo indica, es justamente es la variable que va sumando y Numero es la suma total de esos acumuladores.
console.log(totalArray); // esto va a dar 55 pq? pq suma 0+1= 1, 1+2= 3, 3+3=6 y asi hasta llegar al elemnto 10 que dara 55 como numero total de la suma del acumulador

//otro ejemplo
const totalPrecio = listaSuper.reduce((acumular, numero) => acumular + numero.price, 0);
console.log(totalPrecio);

const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

const buscado = productos.find((producto) => producto.id === 3);
console.log(buscado); //{id: 3, producto: "Pan", precio: 50}

const existe = productos.some((producto) => producto.nombre === "Harina");
console.log(existe); // false

const baratos = productos.filter((producto) => producto.precio < 100);
console.log(baratos);
// [{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const listaNombres = productos.map((producto) => producto.nombre);
console.log(listaNombres);
//[“Arroz”, “Fideo”, “Pan”, “Flan”]

//Meto SORT

const desordenados = [1, 50, 30, 6, 9, 4, 3, 08, 101, 77];
desordenados.sort((a, b) => a - b, 0); // a y b es solo para decirle el orden desde donde "a" seria menor a "b" mayor. Esto da [1, 3, 4, 6, 8, 9, 30, 50, 77, 101] y los ordena
console.log(desordenados);

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];
items.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a es igual a b
  return 0;
});

console.log(items);

//Math: puede ser random, ,
console.log(Math.max(120, 50, 41, 43, -20, 10));
console.log(Math.min(120, 50, 41, 43, -20, 10));

let azar = Math.random();
console.log(azar);

//Ceil(entero superior mas cercano)
console.log(Math.ceil(azar));
//Floor(entere inferiormas cercano)
console.log(Math.floor(azar));
// Round redondea los decimales
console.log(Math.round(azar));
//Trunc saca los decimales y redondea el entero
console.log(Math.round(azar));
