// let numero = parseInt(prompt("Ingrese un numero"));
// let decimal = 0.0;
// if (numero <= 10) {
//   alert("el numero es menor a 10");
// } else if (decimal) {
//   alert("El numero es un decimal");
// } else {
//   alert("El numero es mayor a 10");
// }

// let necesitoVacaciones = true;
// if (!(necesitoVacaciones = true)) {
//   let place = prompt("Ingrese donde le gustaria ir de vacaciones ");
//   alert("Su lugar ideal es " + place);
// } else {
//   alert("No ingreso ningun lugar");
// }

let altura = parseFloat(prompt("Ingrese su altura"));
let peso = parseFloat(prompt("Ingrese su peso"));
let calculo = peso / (altura * altura);
console.log(calculo);

if (calculo < 18.5) {
  let pesoInferior = document.getElementById("pesoInferior");
  pesoInferior.textContent = "Peso inferior al normal";
  //   alert("Peso inferior al normal");
} else if (calculo >= 18.5 && calculo <= 24.9) {
  let pesoNormal = document.getElementById("pesoNormal");
  pesoNormal.textContent = "Usted tiene un peso Normal";
  //   alert("Peso normal");
} else if (calculo >= 25.0 && calculo <= 29.9) {
  let chuby = document.getElementById("chuby");
  chuby.textContent = "Estas un poco excedido de peso";
  //   alert("Estas un poco excedido de peso");
} else {
  let excedido = document.getElementById("excedido");
  excedido.textContent = "Usted esta excedido de peso";
  //   alert("Esta excedido de peso");
}
