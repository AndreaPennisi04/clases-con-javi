class ProductManager {
  constructor() {
    this.productos = [];
  }
  agregarProducto(id, title, description, price, thumbnail, code, stock) {
    this.productos.push({
      id: id,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    });
  }
  obtenerProductos() {
    return this.productos;
  }

  buscarProducto(numero) {
    let busqueda = this.productos.find((elemeto) => elemeto.code == numero);
    return busqueda;
  }

  eliminarProducto(id) {
    //nati aca como parametro le pasas o el ID o el codigo. Mejor el ID
    let eliminar = this.productos.findIndex(
      (producto) => producto.id === id
    ); /*lo que haces aca crear una variable para crear los
    pasos de eliminar un array entero por lo que primero tenes que encontrar la referencia que se para por parametro sobre el producto llamando
    a this.product que es donde creas el array, utilizas el metodo findIndex */
    if (eliminar !== -1) {
      // esto es la validacion
      this.productos.splice(eliminar, 1); // Y aca lo que se hace es llamar al array vacio(this.productos) unamos el metodo
      //.splice, entre parentesis indicamos como parametro la variable creada para eliminar el producto y ponemos "," y le pasamos como valor cuantos
      // queremos eliminar. Como se solicita que liminemos 1, construimos la variable para que sea un producto que se elimine
    }
  }
}

const producto1 = new ProductManager();
producto1.agregarProducto(
  15,
  "zapatos Salamone",
  "los mas comodos",
  8000,
  //   " https://http2.mlstatic.com/D_NQ_NP_762735-MLA49787111320_042022-O.webp",
  124,
  15
);
producto1.agregarProducto(
  16,
  "zapatos Naty",
  "los mas comodos",
  3000,
  //   " https://http2.mlstatic.com/D_NQ_NP_762735-MLA49787111320_042022-O.webp",
  126,
  17
);
producto1.agregarProducto(
  16,
  "zapatos Andre",
  "los mas comodos",
  7000,
  //   " https://http2.mlstatic.com/D_NQ_NP_762735-MLA49787111320_042022-O.webp",
  127,
  14
);

console.log(producto1.obtenerProductos());

// console.log(producto1.buscarProducto(127));

producto1.eliminarProducto(15); // aca entre parentesis le pasamos como parametro el num de id para que elimine el array completo.

/* este ejemplo es para eliminar un elemento del arrar: Primero usamos un indexOf (El método indexOf() nos permite obtener el índice de un elemento en un array.)
y luego splice que es quien finalmente eliminara un elemento especifico del array */

// const eliminar = (description) => {
//     // busco su índice en el array
//     let index = description.indexOf(description)

//      // si existe, o sea es distinto a -1, lo borro con splice
//     if (index != -1 ) {
//         description.splice(index, 1)
//     }
// }

// eliminar(description)
