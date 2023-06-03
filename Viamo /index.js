// const renderProducts = () => {
//   const productos = cargarProductsLS();
// };

for (const producto of productos) {
  let carteras = document.createElement("div");
  carteras.className = "col-md-4 my-4";

  let titulo = document.createElement("h3");
  titulo.innerHTML = producto.titulo;

  let imagenes = document.createElement("img");
  imagenes.src = producto.imagen;
  imagenes.alt = producto.titulo;
  imagenes.className = "img-fluid";

  let precio = document.createElement("p");
  precio.innerHTML = "$" + producto.precio;

  let boton = document.createElement("button");
  boton.innerHTML = "Ver detalle";
  boton.onclick = () => guardarProductosLS(`${item.id}`); // esta es la linea que no funciona

  carteras.append(titulo);
  carteras.append(imagenes);
  carteras.append(precio);
  carteras.append(boton);

  document.getElementById("contenido").append(carteras);
}

// function agregarProducto(id) {
//   let buscar = productos.find((item) => item.id === id);
//   console.log(buscar);
// }
