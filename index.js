import { CerrarTarea } from "./commands/cerrarTarea.js";
import { Tarea } from "./models/tarea.js";
const tarea = new Tarea(
  "1",
  "Llevar al pediatra",
  "Prioridad Alta",
  "26 de septiembre de 2022",
  "1",
  "Maria Fernandez"
);

console.log(tarea);

tarea.finalizar();

console.log("DESPUES DE CERRAR");
console.log(tarea);

const comando = new CerrarTarea(tarea);

const creador = comando.run();
