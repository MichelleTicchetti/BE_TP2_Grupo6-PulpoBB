// import { Administrador } from "./models/administrador.js";

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

console.log("Creo un cuidador");
const cuidador = new PersonaFactory().crear(
  "1",
  "Jose Perez",
  "jperez@gmail.com",
  "Tio",
  USUARIOS.CUIDADOR
);

console.log(cuidador);

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

console.log("Antes de asociar Pulpo con Administrador");
console.log(administrador);
console.log(bb);

administrador.asociarConPulpoBb(bb, administrador);

console.log("Después de asociar Pulpo con Administrador");
console.log(administrador);
console.log(bb);

const tarea = administrador.crearTarea(
  "1",
  "comprar pañales",
  "alta",
  "Tue Oct 18 2022",
  "1"
);

console.log(tarea);

administrador.cerrarTarea("1", "1");

console.log(tarea);
