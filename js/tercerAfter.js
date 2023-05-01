//Opción #1:
// Crear una TODO APP (Aplicación de Tareas para Hacer), donde permita agregar, listar y quitar tareas!
// - Crear una Clase llamada TODO
// - Crear una propiedad llamadas "tareas". (array)
// - Crear métodos agregarTarea, listarTareas, eliminarTarea.
// - Método "agregarTarea": Mostrar un Prompt que permita ingresar el Nombre de la Tarea.
// - Método "listarTareas": Debe listar las tareas con un número de posición Ejemplo:
//     1- Hacer la cama
//     2- Hacer el desayuno
//     3- Ir al gym...
// - Método "eliminarTarea": Mostrar un Prompt que permita ingresar el número de la tarea a Eliminar.

// Es necesario para este ejercicio utilizar Objetos (Clases) y Arrays con algún método de búsqueda.

class TODO {
  constructor() {
    this.tareas = []; //Array de tareas
  }
  agregarTarea() {
    //Agrego las tareas al array tareas
    let instruccion = prompt("Ingrese nombre de tarea");
    this.tareas.push(instruccion);
  }
  listarTareas() {}
}

const tarea1 = new TODO();
tarea1.agregarTarea();
tarea1.agregarTarea();
tarea1.agregarTarea();

console.log(tarea1);

// let instruccion = prompt("Ingrese tarea"); // variable
let laTarea = [tarea1.tareas, prompt("Ingrese tarea")]; //variable
laTarea.push("Aprender JS");
console.log(laTarea);
laTarea.pop();
console.log(laTarea);
