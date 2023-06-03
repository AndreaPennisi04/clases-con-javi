let mensaje = localStorage.getItem("bienvenida");
let bandera = localStorage.getItem("esValido");
let numero = localStorage.getItem("unNumero");

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero); // ‘20’

// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento
sessionStorage.setItem("seleccionados", [1, 2, 3]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@email.com");

//Sessionstorage: getitem
let lista = sessionStorage.getItem("seleccionados").split(",");
let banderas = sessionStorage.getItem("esValido") == "true";
let email = sessionStorage.getItem("email");

console.log(typeof lista); //object ["1","2","3"];
console.log(typeof banderas); //boolean;
console.log(typeof email); //string;

localStorage.setItem("bienvenida", "¡Hola Code!");
sessionStorage.setItem("esValido", true);

localStorage.removeItem("bienvenida");
sessionStorage.removeItem("esValido");
localStorage.clear(); //elimina toda la información
sessionStorage.clear(); //elimina toda la información
