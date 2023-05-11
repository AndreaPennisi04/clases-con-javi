const productos = [
  {
    id: 1,
    nombre: "Hamburguesa",
    descripcion:
      "El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.",
    calorias: 243,
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXzqebG/200/200/original?country=ar",
    precio: 1500,
  },
  {
    id: 2,
    nombre: "Hamburguesa con Queso",
    descripcion:
      "Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.",
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar",
    calorias: 289,
    precio: 1600,
  },
  {
    id: 3,
    nombre: "McFiesta",
    descripcion: "Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga, tomate.",
    calorias: 295,
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXakvb9/200/200/original?country=ar",
    precio: 1700,
  },
  {
    id: 4,
    nombre: "Doble Carne Doble Queso",
    descripcion:
      "Hamburguesa elaborada con dos medallones de carne 100% de carne vacuna y dos fetas de nuestro exclusivo Quedo Cheddar.",
    calorias: 430,
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krXm2g5T/200/200/original?country=ar",
    precio: 1800,
  },
  {
    id: 5,
    nombre: "Triple Hamburguesa con Queso",
    descripcion:
      "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar.",
    calorias: 512,
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXsCqnz/200/200/original?country=ar",
    precio: 1900,
  },
  {
    id: 6,
    nombre: "Sundae de Dulce de Leche",
    descripcion:
      "El exquisito helado de vainilla que ya conoces y te encanta, pero bañado de una salsa de dulce de leche que te encantará aún más.",
    calorias: 257,
    imagen:
      "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-dulce-de-leche.png/200/200/original?country=ar",
    precio: 500,
  },
];

let salida = "";

productos.forEach((element) => {
  const elementosPorColumna = Math.ceil(productos.length / 3);
  salida += `<h1> ${element.nombre} </h1>
     <img src="${element.imagen}" alt="${element.descripcion}"></img>
     <p>$${element.precio}</p>`;
}),
  (document.getElementById("contenido").innerHTML = salida);
