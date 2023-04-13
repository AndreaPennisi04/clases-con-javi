// const persona1 = { nombre: "Natalia", apellido: "Lopez", edad: 32, provincia: "Mendoza" };
// console.log(persona1);

// let nombre = prompt("Ingrese nombre:");
// let edad = prompt("Ingrese edad:");
// const persona2 = { nombre: nombre, edad: edad, ciudad: prompt("Ingrese su ciudad:") };
// console.log(persona2);

// function clacularEdad(nombre, edad, provincia) {
//   let estado;
//   if (nombre == null || nombre == "") {
//     alert("Ingrese un nombre");
//     return false; //esto es para validar el dato
//   }

//   if (edad == null || edad == "") {
//     alert("Ingrese un nombre");
//     return false; //esto es para validar el dato
//   }

//   if (provincia == null || provincia == "") {
//     alert("Ingrese un nombre");
//     return false; //esto es para validar el dato
//   }
//   if (provincia.toLwerCase() == "buenos aires") {
//     if (edad >= 18){
//         estado = "Sos adulto";
//     }else {
//         estado = "No es adulto"
//     }
//   } else {
//     if (edad >= 18){
//         estado = "Sos adulto";
//     }else {
//         estado = "No es adulto"
//     }
//   }
// }

/*Constructores*/

// // function Persona(nombre, edad, domicilio) {
// //   this.nombre = nombre;
// //   this.edad = edad;
// //   this.domicilio = domicilio;
// //   this.Saludar = function () {
// //     alert("Hola, " + this.nombre);
// //   };
// }
// const persona1 = new Persona("Naty", 32, "Mendoza");
// const persona2 = new Persona("Javi", 40, "Buenos Aires");

// console.log(persona1);
// console.log(persona2);

// const persona1 = new Persona("Andrea", 41, "3 kirk place");
// persona1.Saludar();

// for (let propiedad in persona1) {
//   console.log(persona1[propiedad]);
// }

/*CLASES*/

// class Persona {
//   constructor(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//   }
// }
// const persona2 = new Persona("Homero", 39, "Av. Siempreviva 742");

/*Clases y Metodos*/
// class Persona {
//   constructor(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//   }
//   hablar() {
//     console.log("HOLA SOY " + this.nombre);
//   }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// persona1.hablar();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
    this.descuento = 10;
  }
  sumaIva() {
    this.precio = this.precio * 1.21;
  }
  vender() {
    this.vendido = true;
  }
  aplicarDescuento() {
    this.precio = this.precio - (this.precio * this.descuento) / 100;
  }
}
const producto1 = new Producto("arroz", "125");
console.log(producto1);
producto1.sumaIva();
producto1.vender();
producto1.aplicarDescuento();
