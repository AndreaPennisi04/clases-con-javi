// En un archivo
//  que voy a correr usando "node ejercicio.js", crear una clase que haga botellas.

// Las botellas van a tener las siguientes:
//     PROPIEDADES:
//         - Capacidad (se carga cuando se crea la botella)
//         - volumen actual, se inicializa con 0 siempre cuando se crea la botella.
//     METODOS:
//         - LlenarBotella, recibe como parametro cuanto volumen se le agrega. No me deberia dejar poner mas agua de la que entra en la botella.
//             Si rebalsa, ejemplo la capacidad es 1 litro, el volumen actual es 0.5l y trato de agregar 1L entonces va a retornar un valor negativo que es lo que pusimos de más en el caso del ejemplo -0.5 y no va a computar el llenado, esto quiere decir que no se va a afectar el contenido de la botella.
//             Si no rebalsa, se va a retornar el volumenActual luego del llenado.
//         - VaciarBotella, recibe como parametro cuanto volumen se sustrae.
//             Si no hay suficiente se retorna un numero negativo con lo que falta y no se sustrae nada.
//             Si hay suficiente se retorna el volumenActual luego de la sustraccion.
//         - ObtenerVolumenActual, retorna el volumen actual de la botella.

// Una vez que tengo la clase con su constructor, sus propiedades y sus metodos crear una botella de dos litros y agregar agua con un loop de a 0,2L hasta que rebalse.
// Por consola voy a ir mostrando el volumen luego de cada llenado asi:
//         "Se agregó XX L a la botella de XX L y ahora tiene XX L"

// Hasta que rebalse que voy a mostrar un mensaje por consola que diga:
//     "No entra mas agua"

// Y ahi termina el programa.

// class Botella {
//     constructor(capacidad) {
//       this.capacidad = capacidad;
//       this.volumen_actual = 0;
//     }

//     LlenarBotella(volumen) {
//       if (this.volumen_actual + volumen > this.capacidad) {
//         return this.capacidad - this.volumen_actual - volumen;
//       } else {
//         this.volumen_actual += volumen;
//         return this.volumen_actual;
//       }
//     }

//     VaciarBotella(volumen) {
//       if (this.volumen_actual >= volumen) {
//         this.volumen_actual -= volumen;
//         return this.volumen_actual;
//       } else {
//         return -(volumen - this.volumen_actual);
//       }
//     }

//     ObtenerVolumenActual() {
//       return this.volumen_actual;
//     }
//   }

//   const botella = new Botella(2);
//   const volumen_agregado = 0.2;

//   while (true) {
//     const volumen_actual = botella.LlenarBotella(volumen_agregado);

//     if (volumen_actual < 0) {
//       console.log("No entra más agua");
//       break;
//     }

//     console.log(`Se agregó ${volumen_agregado.toFixed(1)}L a la botella de 2L y ahora tiene ${volumen_actual.toFixed(1)}L`);
//   }
