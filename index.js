import { Cuidador } from "./models/cuidador.js";
import { Tarea } from "./models/tarea.js";

const cuidador = new Cuidador(
  "2039",
  "Michelle Ticchetti",
  "mticchetti@gmail.com",
  "Amiga"
);

console.log("Mis tareas: ");
console.log(cuidador.tareas);
console.log("**********************************************************");

console.log("Creo una tarea:");
const tareaCreada = cuidador.crearTarea("esta es una tarea", "Alta");
console.log(tareaCreada);
console.log("**********************************************************");
console.log("Mis tareas length: ");
console.log(cuidador.tareas.length);
console.log("**********************************************************");

console.log("Cierro la tarea:");
cuidador.cerrarTarea(tareaCreada);
console.log("**********************************************************");
