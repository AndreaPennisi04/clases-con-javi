//Diseñar un Sistema de Registración de Productos con (NOMBRE Y PRECIO), donde podamos calcular el IVA para cada producto comprado. Si el monto total supera los $50.000 pesos o 3 productos, realizar un descuento de 10%. Informar Productos comprados y Monto Total a Pagar.

let products = []; //Array de productos
let cart = []; //Array de carrito(Los productos seleccionados)

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.iva = 21;
  }
  aplicarIva() {
    this.price = (this.price * this.iva) / 100 + this.price;
  }
}
for (let i = 0; i <= 2; i++) {
  let nameProduct = prompt("Insert product name");
  let price = parseFloat(prompt("Insert product price"));
  let product = new Product(nameProduct, price);
  console.log(product);
  products.push(product); //Agrego un producto al array de productos
  console.log(products);
}
for (let item of products) {
  let respuesta = prompt("Deseas agregar el producto: " + item.name + " al carrito?");
  if (respuesta == "yes") {
    item.aplicarIva();
    cart.push(item);
    console.log(cart);
  }
}
sumaTotal = 0;
for (let item of cart) {
  sumaTotal = sumaTotal + item.price;
}

alert("Total a pagar: $" + sumaTotal);
