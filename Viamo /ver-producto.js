const renderProducto = () => {
  const productos = cargarProductoLS();
  let contenido = `<div class="col-md-4">
  <p> <img src="${item.imagen}" alt="${item.titulo}" class="img-fluid"></p>
  </div>
  <div class="col-md-4">
  <h4>${item.titulo}<span class="text-end"></h4>
  <p>${item.descripcion}</p>;
  <p><b>$${item.precio}</b></p>`;

  contenido +=
    item.stock > 0
      ? `<button class="btn btn-light" onclick="agregarProductoAlCarrito(${item.id})">Agregar al carrito</button>`
      : ``;
  contenido += `</div>`;
  document.getElementById("contenido").innerHTML = contenido;
};
renderProducto();
