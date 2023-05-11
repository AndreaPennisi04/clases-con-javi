const btnSaludoGenerico = document.getElementById("generico"), // generico, personalizado, prueba son los nombres del ID
  btnSaludoPersonalizado = document.getElementById("personalizado"),
  btnBotonDePrueba = document.getElementById("prueba"),
  imagenesSerena = document.getElementById("Serena"),
  inputNombre = document.querySelector("#inputNombre"),
  inputPassword = document.querySelector("#inputPassword");
// titulo = document.querySelector();

// function saludarGenerico() {
//   alert("Hola!!");
// }
// btnSaludoGenerico.addEventListener("click", saludarGenerico); // los () en saludarGenerico no es necesario pq sino se muestra instantaneamente

// // funciones con parametros
// // function saludarPersonalizado(nombre1, name) {
// //   alert(`Hola  ${nombre1}, Hola  ${name}`);
// // }
// // btnSaludoPersonalizado.addEventListener("click", () => {
// //   saludarPersonalizado("Nati ", "Javi");
// // });

// //Funcion con parametro + prompt(No me funciona)

// function saludarPersonalizado(nombre) {
//   alert(`Hola  ${nombre}`);
// // }
// let nombreUsuario = prompt("Ingrese nombre:");

// // btnSaludoPersonalizado.addEventListener('click"', () => {
// //   saludarPersonalizado.alert(`Hola ${nombreUsuario1}`);
// // });

// //Otra forma
// btnSaludoGenerico.onclick = saludarGenerico;

// //Con funcion flecha
// btnSaludoGenerico.onclick = () => {
//   saludarGenerico(nombreUsuario);
// };

//Con funcion flecha pero con pedir nombre dentro
// function saludarGenerico() {
//   alert(`Hola ${nombreUsuario}`);
// }
// btnSaludoGenerico.onclick = () => {
//   let nombreUsuario = prompt("Ingrese nombre:");
//   saludarGenerico(nombreUsuario);
// };

//Esto es para usar el on click mostrando un mensaje por consola
btnBotonDePrueba.onclick = () => {
  console.log("Hola, hiciste click en el boton de prueba");
};

//Onmousemove: este evento es para captar cada vez que el mouse se mueve sobre el boton de prueba
// btnBotonDePrueba.onmousemove = () => {
//   console.log("Moviste el mouse, dejalo quieto y este mensaje no se mostrará.");
// };

//Para imagenes
imagenes.onmouseover = () => {
  imagenes.style.backgroundImage =
    'url( "https://s.cafebazaar.ir/images/upload/screenshot/com.teamstos.android.catwallpaper-7ca878ed-8c53-4747-a915-1bf1e7971111.jpeg?x-img=v1/resize,h_300,lossless_true")';
  console.log("It's so cute");
};
imagenes.onmouseout = () => {
  imagenes.style.backgroundImage = 'url("./imagenes/serenaTsukino.jpg")';
  console.log("She is Serena Tsukino");
};

//Usando querySelectorAll and addEventListener
let radio = document.querySelectorAll('input[type="radio"]');
console.log(radio);

for (const elemento of radio) {
  elemento.addEventListener("click", () => {
    console.log("Hiciste click en un radio button" + elemento.value); // elemneto.value me indica que opcion elegi, que radio button
  });
}

// Para cambiar imagenes cuando usamos ina imagen que cambia segun la opcion que elija el usuario
function cambiarImage(elemento, source) {
  elemento.src = source;
}
const sailorMoon = [
  {
    id: 1,
    nombre: "Serena Tsukino",
    opcion: "1",
    imagen: "https://i.pinimg.com/236x/a7/77/e1/a777e1e703f1802e129ed563b5e6186d.jpg",
  },
  {
    id: 2,
    nombre: "Serena yo!",
    opcion: "2",
    imagen: "https://i.pinimg.com/564x/8b/20/d5/8b20d5547ad2e730f620a2f4da2b6c1a.jpg",
  },
  {
    id: 3,
    nombre: "Serena angry",
    opcion: "3",
    imagen: "https://i.pinimg.com/150x150/50/98/a7/5098a7248f4a46074025d76d6d85881a.jpg",
  },
];
radio.forEach((item) => {
  item.addEventListener("click", () => {
    let radio = item.value;
    let variante = sailorMoon.find((option) => option.opcion == radio);
    console.log(variante);
    cambiarImage(imagenesSerena, variante.imagen);
  });
});

//Evento teclado: keyup y keydown:  //keyup lo captura cuando suelto la tecla y keydown cuando vas escribiendo
// inputPassword.addEventListener("keyup", () => {
//   console.log(inputPassword.value); //el value se captura al momento que pasa el evento que es cuando se suelta el teclado
// });

//Evento Onchange
inputNombre.onchage = () => {
  console.log(inputNombre.value);
};

//keypress
// inputPassword.addEventListener("keypress", (evento) => {
//   let codigoDeCaracter = evento.charCode; //charcode cada letra tiene un numero codigo ascii
//   console.log(codigoDeCaracter);
//   console.log(evento);
// });
//usando el mismo ejemplo pero limitando que cracteres puede poner usando codigo ascii con charCode
inputPassword.addEventListener("keypress", (evento) => {
  let codigoDeCaracter = evento.charCode;
  if (codigoDeCaracter != 0) {
    if (codigoDeCaracter < 97 || codigoDeCaracter > 122) {
      evento.preventDefault(); // esto nos permite que si bien keypress captura cada vez q presionamos una tecla
      //esto hace que las teclas que no estan permitidas no sean capturadas
      alert("Solo se puede ingresar minusculas");
    }
  }
});

//submit
const btnRegistrar = document.getElementById("registrar");

btnRegistrar.onclick = (evento) => {
  if (evento.preventDefault()) {
    alert("Faltan datos para ingresar");
  } else {
    evento.preventDefault();
    alert("Te registraste exitosamente");
  }
};
