/* OBJETOS*/
let lapicera = {
  trazo: "fino",
  color: "Azul",
  marca: "Bic",
  stock: true,
};

console.log(lapicera); // asi llamo por consola todo lo que esta dentro del objeto
console.log("El color de la lapicera es: " + lapicera.color); // y se mostraria por consola "El color de la lapicera es: Azul"
console.log("La marca de la lapicera es: " + lapicera["marca"]); // llego al mismo resultado anterior pero la llamo con corchetes[]. Con . o []es valida

// cambiar el dato del atributo o modificar la propiedad. Se hacede y modifica de la siguiente manera:

lapicera.color = "Negro"; //o
lapicera["trazo"] = "Grueso";
console.log(lapicera);
// este ejemplo se usa par casos como modificar una contrasena, es para que pise el dato y lo modifique por otro

/*Constructores: el constructor de un objeto es una funcion q usamos para crear un nuevo objeto
cada vez q sea necesario. Lo que se haria es crear un modle como el siguiente*/
//constructor de un molde para un objeto tipo
function Persona(nombre, edad, direccion) {
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
} // esto es el molde

const pers1 = new Persona("Andrea", 41, "3 kirk place"); //al molde persona se le agregan los datos
const pers2 = new Persona("Pancho", 10, "3 kirk place");
//para cambiar datos, aca ta,bien se puede utilizar por ejemplo
pers1.direccion = prompt("ingrese la direccion de la persona: " + pers1.nombre);
console.log(pers1); // tengo que volver a llamar a la funcion para ver el nuevo valor

//Tambien se podria escribir asi el molde
function Mascota(objetoMascota) {
  this.nombre = objetoMascota.nombre;
  this.raza = objetoMascota.raza;
}

const miPerro = new Mascota({ nombre: "Dylan", raza: "Maltez" });
console.log(miPerro);
const miPerro2 = new Mascota({ nombre: "Giusepe", raza: "tontona" });
console.log(miPerro2);

//Metodos: Son funciones exclusivas de objetos de un tipo.Es darle funcionales a un unico objeto de un tipo. Hay metodos exclusivos para los Strings como toLowrCase o toUpperCase
let frase = "Hello World";
console.log(frase.toLowerCase);
console.log(frase.toLocaleUpperCase);

let texto = prompt("Ingrese un texto de no mas de 5 renglones");

// if (texto == "TEXTO" || texto == "texto" || (texto = "Texto")) {
//   console.log("El texto esta bien escrito");
// } ESTO seria una opcion pero para evitar que me quede algo sin pasar como Hola Mundo en vez de las tres opciones que tengo en este ejemplo, se puede hacer de esta forma

if (texto.toLowerCase() == "texto") {
  console.log("El texto esta bien escrito");
} //Esto seria para que me pase todo a minuscula directamente

/*Para pedir longitud de la frase*/
let frase2 = "Hello World";
console.log("La longitud de la frase es: " + frase2.length + " caracteres");

/*Metodos personalizados*/
function Rectanulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.calcularArea = function () {
    //calcularArea es un metodo exclusivo de Rectanculo
    console.log("El area del rectangulo es " + this.calcularArea);
  };
}

let rectangulo1 = new Rectangulo(4, 2);
rectangulo1.calcularArea();

let rectangulo2 = new Rectangulo(14, 20);
rectangulo2.calcularArea();

//Ejemplo entero
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad = edad;
  this.calle = calle;
  this.hablar = function () {
    console.log("HOLA SOY " + this.nombre);
  };
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();

/* Estructura IN o FOR...IN
podemos utiliza a IN para saber si existe el nombre de una determinada propiedad de un objeto*/
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log("nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log("origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad /*(propiedad es el nombre que le damos pero podria ser fulanito)*/ in persona1) {
  console.log(propiedad);
}

// si quisiera solo llamar a una variable especifica del objeto deberia llamarla asi en el console.log:
for (const propiedad in persona1) {
  console.log(persona1[propiedad]);
}

//CLASS: ES OTRA FORMA DE CREAR OBJETOS
class Persona {
  constructor(nombre, edad, calle) {
    this.nombre = nombre; //O prompt("Ingrese mnombre: " + nombre);
    this.edad = edad; // O prompt("Ingrese edad: " + edad);
    this.calle = calle; //O prompt("Ingrese mnombre de la calle: " + calle);
  }
}
const pers1 = new Persona("Andrea", 41, "3 Kirk Place");

let nombre = prompt("Ingrese mnombre: " + nombre);
let edad = prompt("Ingrese edad: " + edad);
let calle = prompt("Ingrese mnombre de la calle: " + calle);

const pers3 = new Persona(nombre, edad, calle);
console.log(pers3);
pers3.hablar();

//Clases y Metodos
class Persona {
  constructor(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
  }
  hablar() {
    console.log("HOLA SOY " + this.nombre); // esto seriala función constructora es reemplazada por el método constructor. Los métodos en las clases no referencian a propiedades, se declaran dentro del bloque sin la palabra function.
  }
}
const per1 = new Persona("Pancho", 10, "3 Kirk Place");
persona1.hablar();

//Otro ejemplo de un carrito de compras
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  vender() {
    this.vendido = true;
  }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
