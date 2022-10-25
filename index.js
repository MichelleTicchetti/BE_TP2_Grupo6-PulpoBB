import { Tarea } from "./models/tarea.js";
import { PulpoBbFactory } from "./factories/pulpobb_factory.js";
import { Persona } from "./models/persona.js";
import { USUARIOS } from "./models/usuario.js";
import { PersonaFactory } from "./factories/persona_factory.js";
import { TareaFactory } from "./factories/tarea_factory.js";

console.log("Creo un administrador");
const administrador = new PersonaFactory().crear(
  "1",
  "Juan Perez",
  "jperez@gmail.com",
  "Padre",
  USUARIOS.ADMINISTRADOR
);

console.log(administrador);

//creo un pulpo bb
const bb = administrador.crearPulpoBb(
  "1",
  "12 de febrero de 2022",
  "Joaquin",
  "3kg",
  "123456789",
  "50cm"
);

console.log(bb);

console.log("Creo un cuidador");
const cuidador = administrador.crearCuidador(
  "2",
  "Jose Perez",
  "jperez@gmail.com",
  "Tio",
  USUARIOS.CUIDADOR,
  "1"
);

console.log(cuidador);

// console.log("Antes de asociar Pulpo con Administrador");
// console.log(administrador);
// console.log(bb);

// administrador.asociarConPulpoBb(bb, administrador);

// console.log("Después de asociar Pulpo con Administrador");
// console.log(administrador);
// console.log(bb);

const tarea = administrador.crearTarea(
  "1",
  "comprar pañales",
  "alta",
  "Tue Oct 18 2022",
  "1",
  "2"
);

console.log(tarea);

// administrador.cerrarTarea("1", "1");

// console.log(tarea);

const finalizadas = bb.dameTareasFinalizadas();
console.log("FINALIZADAS" + finalizadas);

bb.dameAdministradores();
