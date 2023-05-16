const productos = [
  {
    id: 1,
    titulo: "SOPHIA NEGRO",
    descripcion:
      "Riñonera de cuero sintético liso con detalle de tachas metálicas, cierre y correa regulable con hebilla. Altura: 15cm - Largo: 36cm - Ancho: 9cm.",
    precio: 14840,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269225-1200-auto?width=1200&height=auto&aspect=true",
  },
  {
    id: 2,
    titulo: "SIENI NEGRO",
    descripcion:
      "Bandolera de cuero sintético graneado con detalle de aplique frontal, cadena y cierre metálico. . Altura: 13cm - Largo: 19cm - Ancho: 6cm.",
    precio: 17760,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269231-1200-auto?width=1200&height=auto&aspect=true",
  },
  {
    id: 3,
    titulo: "SANTONI NUDE",
    descripcion:
      "Bandolera de cuero sintético liso con detalle de correa de hombro regulable estampada y cierre metálico. Altura: 14,5cm - Largo: 21cm - Ancho: 8,5cm.",
    precio: 16660,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269233-1200-auto?width=1200&height=auto&aspect=true",
  },
  {
    id: 4,
    titulo: "SAINT HUESO",
    descripcion:
      "Bandolera de cuero sintético graneado combinado con gamuza con detalle de tira de mano, correa de hombro regulable estampada y cierre metálico. Altura: 16cm - Largo: 22cm - Ancho: 9cm.",
    precio: 19320,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269228-1200-auto?width=1200&height=auto&aspect=true",
  },
  {
    id: 5,
    titulo: "TONIA NEGRO",
    descripcion:
      "Mochila de textil con detalle de bolsillos laterales y cintas frontales a tono. Altura: 36cm - Largo: 26cm - Ancho: 11,5cm.",
    precio: 20440,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269248-1200-auto?width=1200&height=auto&aspect=true",
  },
  {
    id: 6,
    titulo: "TONIA PLATA",
    descripcion:
      "Mochila de textil con detalle de bolsillos laterales y cintas frontales a tono. Altura: 36cm - Largo: 26cm - Ancho: 11,5cm.",
    precio: 20.44,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269249-1200-auto?width=1200&height=auto&aspect=true",
  },
];

for (const producto of productos) {
  let carteras = document.createElement("div");
  carteras.className = "col-md-4";

  let titulo = document.createElement("h3");
  titulo.innerHTML = producto.titulo;

  let imagenes = document.createElement("img");
  imagenes.src = producto.imagen;
  imagenes.alt = producto.titulo;
  imagenes.className = "img-fluid";

  let precio = document.createElement("p");
  precio.innerHTML = "$" + producto.precio;

  let boton = document.createElement("button");
  boton.innerHTML = "agregar";
  boton.onclick = () => agregarProducto(producto.id);

  carteras.append(titulo);
  carteras.append(imagenes);
  carteras.append(precio);
  carteras.append(boton);

  document.getElementById("contenido").append(carteras);
}

function agregarProducto(id) {
  let buscar = productos.find((item) => item.id === id);
  console.log(buscar);
}
