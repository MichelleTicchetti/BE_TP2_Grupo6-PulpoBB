import { Cuidador } from "./models/cuidador.js";
import { Tarea } from "./models/tarea.js";

const cuidador = new Cuidador(
  "2039",
  "Michelle Ticchetti",
  "mticchetti@gmail.com",
  "Amiga"
);

console.log("Creo una tarea:");
const tareaCreada = cuidador.crearTarea("esta es una tarea");
console.log(tareaCreada);
console.log("**********************************************************");

console.log("Cierro la tarea:");
cuidador.cerrarTarea(tareaCreada);
console.log(cuidador.tareas);
console.log("**********************************************************");
