const productos = [
  {
    id: 1,
    titulo: "SOPHIA NEGRO",
    descripcion:
      "Riñonera de cuero sintético liso con detalle de tachas metálicas, cierre y correa regulable con hebilla. Altura: 15cm - Largo: 36cm - Ancho: 9cm.",
    precio: 14840,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269225-1200-auto?width=1200&height=auto&aspect=true",
    stock: 5,
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
    stock: 10,
  },
  {
    id: 4,
    titulo: "SAINT HUESO",
    descripcion:
      "Bandolera de cuero sintético graneado combinado con gamuza con detalle de tira de mano, correa de hombro regulable estampada y cierre metálico. Altura: 16cm - Largo: 22cm - Ancho: 9cm.",
    precio: 19320,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269228-1200-auto?width=1200&height=auto&aspect=true",
    stock: 3,
  },
  {
    id: 5,
    titulo: "TONIA NEGRO",
    descripcion:
      "Mochila de textil con detalle de bolsillos laterales y cintas frontales a tono. Altura: 36cm - Largo: 26cm - Ancho: 11,5cm.",
    precio: 20440,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269248-1200-auto?width=1200&height=auto&aspect=true",
    stock: 7,
  },
  {
    id: 6,
    titulo: "TONIA PLATA",
    descripcion:
      "Mochila de textil con detalle de bolsillos laterales y cintas frontales a tono. Altura: 36cm - Largo: 26cm - Ancho: 11,5cm.",
    precio: 20.44,
    imagen: "https://viamo.vtexassets.com/arquivos/ids/269249-1200-auto?width=1200&height=auto&aspect=true",
    stock: 0,
  },
];

//Esto guarda los productos en el local storage (LS)
const guardarProductosLS = (productos) => {
  // Guardar un array de Productos
  localStorage.setItem("productos", JSON.stringify(productos));
};
const cargarProductsLS = () => {
  //Cargar un array de Productos
  return JSON.parse(localStorage.getItem("productos")) || [];
};

const guardarCarritoLS = (productos) => {
  //Guardar un Array de prodcutos seleccionados
  localStorage.setItem("carrito", JSON.stringify(productos));
};

const guardarProductoCarrito = (producto) => {
  //Gurada un producto seleccionado al carrito
  const carrito = cargarCarritoLS();
  carrito.push(producto);
  guardarCarritoLS(carrito);
};

const cargarCarritoLS = () => {
  return JSON.parse(localStorage.getItem("carrito")) || [];
};

//Guardar un objeto producto
const guardarUnProductoLS = (producto) => {
  const productos = buscarProducts(id);
  localStorage.setItem("producto", JSON.stringify(productos));
};

//Carga un objeto Producto
const cargarProductoLS = () => {
  return JSON.parse(localStorage.getItem("producto")) || [];
};

const buscarProducts = (id) => {
  const productos = cargarProductsLS();
  return productos.find((item) => item.id === id);
};
const actualizarBotonCarrito = () => {
  const carrito = cargarCarritoLS(); // array de productos seleccionados
  let total = carrito.reduce((acumular, item) => (acumular += item.cantidad), 0);
  document.getElementById("productosCarrito").innerHTML = total;
};

const existInCart = (id) => {
  const carrito = cargarCarritoLS();

  return carrito.some((item) => item.id === id);
};

const agregarProductoAlCarrito = (id) => {
  const carrito = cargarCarritoLS(id);
  if (existInCart(id)) {
    let pos = carrito.findIndex((item) => item.id === id);
    carrito[pos].cantidad = +1;
  } else {
    const producto = buscarProducts(id);
    producto.cantidad = 1;
    guardarCarritoLS(carrito);
  }

  guardarProductoCarrito(productos);
  actualizarBotonCarrito();
};

guardarProductosLS(productos);
actualizarBotonCarrito();
