import { AsociarTarea } from "./commands/asociarTarea.js";
import { Tarea } from "./models/tarea.js";
import { Persona } from "./models/persona.js";
import { USUARIOS } from "./models/usuario.js";

const tarea = new Tarea(
  "1",
  "Llevar al pediatra",
  "26 de septiembre de 2022",
  "1",
  "Maria Fernandez"
);
const persona = new Persona(
  "1",
  "Michelle Ticchetti",
  "mticchetti@gmail.com",
  "Amiga",
  USUARIOS.CUIDADOR,
  "1"
);

const comando = new AsociarTarea(tarea, persona);

comando.run();
