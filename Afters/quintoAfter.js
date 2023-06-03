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
];

for (const producto of productos) {
  let columna = document.createElement("div");
  columna.className = "col-md-3";
  let p1 = document.createElement("h3");
  p1.innerHTML = producto.titulo;
  let p2 = document.createElement("img");
  p2.src = producto.imagen;
  p2.alt = producto.titulo;
  p2.className = "img-fluid";
  let p3 = document.createElement("p");
  p3.innerHTML = "$" + producto.precio;

  columna.append(p1);
  columna.append(p2);
  columna.append(p3);

  document.getElementById("contenido").append(columna);
}
