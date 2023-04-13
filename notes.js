// let edad = 40;
// edad = 41 ; let permite que el nombre de la variable (edad)se pueda cambiar su valor por ejemplo para sumar anos

const { EmojiObjectsOutlined } = require("@mui/icons-material");

/*Se puede declarar una variable sin darle ningun valor
let ciudad; 
luego puedo llamarla y darle un valor
ciudad = bo'ness; o
ciudad = [bo'ness, linlightgow, falkirk]
*/

/*mezcla de let y const*/
// let numeroA = 4;
// let numeroB = 8;
// const numero3 = 12;

// let suma = numeroA + numeroB;
// let division = numero3 / numeroA;

/*concatenacion*/
// let palabra1 = "hola";
// let palabra2 = "mundo";

// let concatenar = palabra1 + " " + palabra2;

/* prompt() es un cuadro de dialogo donde el ususario escribe informacion y debe estar en una variable let nombre = prompt("Ingrese su nombre")*/
/* alert () son avisos se le puede poner el nombre de la variable para pode mostrar un texto + lo que pide la variable*/
/* console.log () es para el desarrollador, solo muestra en la consola un resultado poniendo un texto, escribiendo una variable, poniendo un resultado en numero*/
/* parseInt() sirve para convertir un string a un numero, tambien se usa para numeros pares
parseFloat() se usa para numeros impares*/

/* condicionales
los condicionales son aquellas condiciones que son verdaderas o falsas. para ello usamos if, todo valor que se le pase a ese if es lo que decide de como sera esa condicion. 
por ejemplo: if (....) {....}    
let nombre = "andrea"

if (nombre = "andrea"){
    console.log ("Bienvenida" + nombre)
}
if (true)si el valor dentro de las llaves es verdadero lo que este dentro del las {} es lo que se va a mostrar. 
Si el if tiene un valor falso dentro de las (), todo lo que este dentro de las{} no se va a mostrar y va a saltear esa parte del codigo.
let nombre = "romina"

if (nombre = "andrea"){
    console.log ("Bienvenida" + nombre)// este mensaje no se va a ver pq el valor de la variable nombre es romina y no andrea.
    el valor dentro de los ()no es el mismo q el de la variable nombre 
}

Else 
let nombre = prompt("Ingrese nombre")

if (nombre = "andrea"){
    console.log ("Bienvenida Andrea)
}else{
    console.log ("nombre no autorizado")
}

else if (sino)
*** importante el parseInt tmabien hace que un string "22" se transforme en un numero 22***
Aca entran los operadores:
== igual
=== estrictamente igua
<= menor igual
>= mayor igual
< menor
> mayor
!= es distinto
!== estrictamente distinto 
&& y
|| o (el or || lo que hace los valores dentro de la variable, con uno de ellos que se cumpla es suficiente para que se 
    cumpla la condicion o sea verdadero ej: "ANDREA" o "andrea" para q si queiero q el resultado sea Andrea, con cualquier de los dos, se cumple la condicion)
! operador no, de negacion

recurdar que si quiero calcular algo o sumar la cantidad de algo SIEMPRE una variable tiene que 
empezar de 0 para ir contando ej:
let start = 0
let cantidad = 5
esto lo que hace es que el contador empieze desde 0 
*/

/* Ciclos e iteraciones
los ciclos o bucles nos permiten tomar una parte del codigo para repetir esa porcion X cantidad de veces. por ejemplo le permito a un usuario q pueda ingresar 3 veces la contrasena
si en el 3 intento se equivoca, la cuenta se bloquea por ejemplo. 
se pueden usar los operadores como &&, ||, < >, != etc. 

Los ciclos o bucles son: FOR (sentencia break or continue), WHILE Y DO WHILE.

La estructura Switch NO ES un ciclo, es un CONDICIONAL como un IF.

FOR (este ciclo se llama ciclo por conteo): desde, hasta, y en cuantas unidades se va acualizar la variable contadorapor cada vuelta que mayormente es en 1 unidad (i++)
for() {lo que se ecrib aca dentro es lo que se va a ejecutar mientras dura el ciclo}. LAs iteraciones son las vueltas que da el ciclo
Ciclo for solo se declara una variable utilizando let que esto permite que se produzca el ciclo ya que let en mutable. Si pnemos const en vez de let, solo va a siclar la primera ves
por const es una constante y es inmutable.
para sumar en vez de a uno y qusiera hacer saltos de 3 en 3 en vez de i++ seia i+i+3 por ejemplo.
-- pequeno apuente: prompt siempre habla en strings por eso, si queremos convertirlo en un numero usamos parseint or parsefloat.

Sentencia BREAK:
Esto se podria utilizar para el login. por ejemplo dandole 3 chances al ususarion para ingresar la clave. El break permite cortar cuando se cumple la condicion.

Sentencia CONTINUE:
Lo que hace es saltear un caso. Saltea la repeticion. Por ejemplo quiero mostrar solo numeros impares de un conteo del 1 al 10.para numeros pares se lo compara con un 1 para impares se lo compara con 0.

WHILE (ciclo por condicion):
Aca se evalua una condicion y si esa condicion es verdadera sigue siclando. si no es verdadera o falsa, deja de ciclar.
Ojo con los bucles. para no hacer un bucle, lo que pido fuera del ciclo se debe volver a pedir adentro del ciclo ej: let aspecto= lindo
while (aspecto != feo){ aspecto = prompt(Usted es = aspecto);} )

DO While (es muy parecido al while, la diferencia esta en la cantidad minima que puede ciclar)
El DO permite que el bloque de codigo se interprete almenos una vez En el caso del do, la pregunta se hace dentro del ciclo o pq la condicion se va a dar en el while. 
si no hacemos la pregunta dentro del DO, vamos a hacer un bucle infinito. 
ejemplo
let equipo;
do{
    equipo = prompt (ingrese el nombre del equipo (s para salir));
    if (equipo != "s"){console.log (El nombre del equipo ingresado es + equipo)}
} while (equipo != "s")

SWITCH:
Al principio no es un ciclo de repeticion, es un concicional. Esto se usa cuando hay muchas condiciones a evaluar. Ejemplo
let producto = prompt(ingrese un producto)
switch (producto){
    case "manzana";
    console.log (el precio de la manzana es $100)
    break, 
    case "banana";
    console.log (el precio de la banana es $200)
    break, 
    case "frutilla"
    case "arandanos"
    console.log (el precio de la frutilla y el arandano es $400)
    break, 
    (hasta aca si lee las sentencias previas, si no cumple ninguna entra default)
    default
    console.log (fruta sin stock)
    break
}

FUNCIONES 
es para hacer codigo modularizado. 
Una funciones es un conjunto de intruscciones que se agrupan para realizar una tarea concreta. 
Creando funcion y llamando la misma o invocandola 
function hola (){
    alert("Hola a todos")
}
hola();

Si tengo que invocar a la funcion mas de una vez:
function solicitarNombre (){
    let nombreIngresado = propmt("Ingrese nombre")
    alert("El nombre ingresado es" + nombreIngresado)
}
solicitarNombre ();
solicitarNombre ();
solicitarNombre ();

*Note: dentro de las funciones se pueden declarar a las constanstes usando LET or CONST dependiendo si quiero que la variable sea mutable o no.

Pararmetro:
los parametros se envian a la funcion mediante variables y se colocan en los (), los que estan posteriores al nombre de la funcion.
/Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar(resultado); 

resultado de la funcion
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);

funcion calcularMult = (numb1, numb2){
    let resultado = numb1*numb2;
    alert("El resultado de"+numb1+ "X"+numb2"+ es: resultado)
    Console.log("+numb1"+"X"+"+numb2"+"="+resultado)
}
calcularMult = (2, 3)

Calcular IVA:

function calcular(precio){// aca el parametro pasado que es (precio) es solo el parametro para calcular el iva
    let conIva = precio*1.21
    alert("el total con iva es $: "+""+conIva)
}
let precioProd = parseFloat(prompt("ingrese precio del producto"))

calcular(precioProd);// aca lo que hacemos es llamar a la funcion clacular pero le pasamos la variable en dodne se ingresa el valor

para hacer un ciclo de repeticion podemos usar For o While:
Ejemplo con FOR
function calcular(precio){// aca el parametro pasado que es (precio) es solo el parametro para calcular el iva
    let conIva = precio*1.21
    alert("el total con iva es $: "+""+conIva)
}
for (let i=1, i=>4; i++){//ciclo de repeticion de 3 veces 
    let precioProd = parseFloat(prompt("ingrese precio del producto"+ i))

calcular(precioProd);
}

Con WHILE:
let precioProd = parseFloat(prompt("Ingrese precio producto. (para salir ingrese 0)"))
while(precioProd!=0){
    calcularIva (precioProd); 
precioProd = parseFloat(prompt("Ingrese precio producto. (para salir ingrese 0)"))///ESTO ES IMPORTANTE. PARA NO HACER UN BUBLE INFINITO SE DEBE VOLVER A LLAMAR LA VARIABLE DENTRO DEL WHILE
}

Funciones con RETURN:
cuando usamos retur, tenemos que retornar el calculo de donde esta planteado, osea retornar la variable en donde se encuentra el calculo.
pero para que se pueda mostrar realmente la funcion, debo crea otra variable por fuera de la funcion llamando al nombre de la funcion que es lo que envuelve el calculo hecho dentro de los{}
para luego ser mostrado en un alert, console.log o en el DOM

function calcularM2(largo, ancho){
    let metrosCuadrados = largo * ancho;
    return metrosCuadrados
}

let resultado = calcularM2(5,7);// parametro de entrada
alert("resultado"+resultado+ "de metros cuadrados")

SCOPE
Variables Local:Las variables locales SOLO se declaran dentro del bloque{} y solo viven dentro del bloque
Ejemplo:
function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;/// esta variable (resultado)es solo utilizada o vive dentro del bloque. las variables locales sirven cuando la variable solo se va a utilizar dentro de ese bloque.
}


Variable Global: Si una variable se declara fuera de cualquier funcion o bloque, automaticamente se trasnforma en una variable GLOBAL. LAVARIABLE GLOBAL PUEDE SER USADA EN CUALQUIER PARTE DEL CODIGO
PERO PARA ELLO SIEMPRE TIENE QUE ESTAR DECLARADA AFUERA DE UNA FUNCION PARA PODER SER UTILIZADA DENTRO DE ESA FUNCION O BLOQUE
EJEMPLO: 
let resultado = 0 /// resultado es una variable global que vive fuera del bloque y que puede ser utilizada dentro del bloque tambien
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
//Se puede acceder a la variable resultado porque es global
console.log(resultado);

FUNCIONES ANONIMAS 
Las funciones anonimas son funciones que se definen sin nombre y que retornan implicitamente o no un resultado. A una variable le puedo asignar una funcion q no tiene nombre pq en realidad el nombre 
lo define la variable que va a dar el resultado, donde a la funcion le doy dos parametros que luego van a ser evaluados ej: const resulado = function (a,b) {return (a+b)}, console.log(resultado(2+2))// esto dara 4

const suma  = function (a, b) { return a + b }
console.log( suma(15,20) )

FUNCIONES FLECHA
Aca nisiquiera es necesario escribir la palabra Function, es mas sintetizada 
const suma  = (a, b) => { return a + b }/// aca se escriben los {}cuando tenemos mas de una linea de codigo dentro de esa funcion
//Si es una función de una sola línea con retorno podemos evitar no solo escribir function sino tambien los {} despues de la flecha
const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )

otro ejemplo de una linea de codigo

let descuento = (precio) => precio * 0.10%
Console.log (descuento (100))/// resultado 10

Ejemplo de varias lineas de codigo

let peso = (peso, altura, masaCorporal) =>{
    aca tambien podria poner q ingrese los valores en pormpts y que esa variable se llame en el console log 

    let concatenado = ("el peso es"+peso+"la altura es"+altura+"la masa corporal es"+masaCorporal+);
    return concatenado;
}
console.log(peso(70, 1.70, 250))
*/

/* Validaciones. Asi se validarian datos
const validacionEntradas = () => {
  if (isNaN(altura) || isNaN(peso)) {
    return false;
  }
  if (altura <= 0 || peso <= 0) {
    return false;
  }
  return true;

  Es importante validar datos para ver que todos los parametros pasen y en caso que falte uno me salete un alert
  */

/*OBJETOS

Los objetos se escriben entre []. El orden q se va a mostrar por consola es en orden alfabetico.
Ahora, si quiero especificar un dato de ese objeto y concatenarlo con uno de los objetos deberia hacer: 
console.log("El color de la lapicera es: "+lapicera.color) y esto me mostraria el color de la lapicera. el (.) punto
es la forma en la que puedo llegar a la propiedad. lapicera es el nombre de la variable u objeto literal y la propiedad o atributo es "color".

Hay tres formas de objetos
1. Objetos Literales: que no son atravez de un molde 
2. Funcion constructora que sí son atravez de un molde
3. Clases donde si son atravez de un molde y podemos tener metodos 

*/

/*ARRAY
 */
