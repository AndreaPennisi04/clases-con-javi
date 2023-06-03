let montoInicial = parseFloat(prompt("Ingrese monto a cotizar"));
let plazo = parseInt(prompt("Ingrese cantidad en de cuotas en 24, 48 o 72"));
let costoTna = 0.95;
let iva = 21;
let seguroVida = 1;

let calculo = (montoInicial / plazo) * costoTna;
// alert("Su costos es: " + calculo.toFixed(2));

let sumaIva = (montoInicial * iva) / 100;
// alert("IVA: " + sumaIva + "%");

let seguro = (montoInicial * seguroVida) / 100;
// alert("Seguro de vida " + seguro);

let tea = montoInicial / 0.016509;
// alert("Su TNA inicial es:  " + tea.toFixed(2) + "%");

let cft = montoInicial / 0.012282;
// alert("Su CFT TNA es:  " + cft.toFixed(2) + "%");

let tem = montoInicial / 0.0834;
// alert("Su CFT TNA es:  " + tem.toFixed(2) + "%");

let total = montoInicial + calculo + sumaIva + seguro + tea + cft + tem;
// alert("Su monto total a pagar es:  " + total.toFixed(2));

console.log("Monto inicial: " + montoInicial);
console.log("Valor de cuota pura: " + calculo);
console.log("IVA: " + sumaIva);
console.log("Seguro de vida: " + seguro);
console.log("CFT TEA: " + tea);
console.log("CFT TNA: " + cft);
console.log("TEM Mensual: " + tem);
console.log("Monto total a pagar: " + total);
