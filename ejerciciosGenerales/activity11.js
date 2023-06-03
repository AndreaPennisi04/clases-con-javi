//Ciclo para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log("Clave: " + clave);
//   console.log("Valor: " + localStorage.getItem(clave));
// }

//Capturando eventos desde storage
function guardarDatos() {
  let contenido = document.getElementById("texto").value;
  localStorage.setItem("texto", contenido);
}

let save = document.getElementById("guardar");
save.onclick = guardarDatos;

function cargarDatos() {
  let inversa = localStorage.getItem("texto");
  document.getElementById("resultado").innerHTML = inversa;
}

let cargando = document.getElementById("cargar");
cargando.onclick = cargarDatos;
