// //setTimeout
// console.log("Hola a Todos!");

// setTimeout(() => {
//   console.log("Hola a Todos!");
// }, 3000);

// console.log("Chau a todos!");

//Ejemplo
let mensaje = document.getElementById("mensaje");
let boton = document.getElementById("boton");
console.log("aca");
boton.addEventListener("click", () => {
  mensaje.classList.add("bg-warning");
  mensaje.innerHTML = "cargando..";

  setTimeout(() => {
    mensaje.classList.remove("bg-warning");
    mensaje.classList.add = "bg-success";
    mensaje.innerHTML = "Proceso finalizado";
  }, 3000);
});
