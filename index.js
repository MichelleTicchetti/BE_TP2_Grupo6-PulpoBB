import { Administrador } from "./models/administrador.js";

console.log("//////////////////////////////////////////////////////");
console.log("//////////////////////////////////////////////////////");

console.log("***CREO UN ADMIN***");

//creo un administrador
const admin = new Administrador("1", "Juan Lopez", "jlopez@gmail.com");
console.log(admin);

console.log("***************");

console.log("***CREO UN PULPO BB***");

//creo un pulpo bb
const bb = admin.crearPulpoBb(
  "1",
  "12 de febrero de 2022",
  "Joaquin",
  "3kg",
  "123456789",
  "50cm",
  admin
);
console.log(bb);

console.log("***************");

console.log("***CREO UN CUIDADOR***");

//creo cuidador
const unCuidador = admin.crearCuidador(
  "1",
  "Susana Lopez",
  "susy@gmail.com",
  "tia",
  "1"
);

console.log(unCuidador);

console.log("***************");
console.log("***ADMIN CREA TAREA***");

//admin crea tarea
const tarea = admin.crearTarea(
  "1",
  "llevarlo al pediatra",
  "alta",
  "Sat Oct 17 2022",
  "1"
);

console.log(tarea);

//admin muestra tareas
const tareasAdmin = admin.dameTareas();
console.log("***************");
console.log("***TAREAS DE ADMIN***");
console.log(tareasAdmin);

console.log("***************");
console.log("***CUIDADOR CREA TAREA***");

//cuidador crea tarea
const otraTarea = unCuidador.crearTarea(
  "2",
  "cumpleaños de pepito",
  "alta",
  "Sat Oct 20 2022",
  "1"
);

console.log(otraTarea);

//cuidador muestra tareas
const tareasCuidador = unCuidador.dameTareas();
console.log("***************");
console.log("***TAREAS DE CUIDADOR***");
console.log(tareasCuidador);

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS AL BB***");
console.log(bb.tareas);

console.log("***************");
console.log("***CREO OTRO CUIDADOR***");

//creo otro cuidador
const otroCuidador = admin.crearCuidador(
  "2",
  "Diego Lopez",
  "diego@gmail.com",
  "tio",
  "1"
);
console.log("***CUIDADOR***");
console.log(otroCuidador);

console.log("***************");
console.log("*** CUIDADORES ASOCIADOS A UN BB ***");

const cuidadoresPulpito = admin.dameCuidadoresPulpito("1");
console.log(cuidadoresPulpito);

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS AL BB***");
console.log(bb.tareas);

console.log("***************");
console.log("*** REASIGNO TAREA DE CUIDADOR 1 A 2 ***");

//reasigno tarea
const tareaReasignada = admin.reasignarTarea("1", "2", "1");

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS AL BB***");
console.log(bb.tareas);

//admin cierra tarea
console.log("***************");
console.log("***ADMIN CIERRA TAREA QUE YA NO TIENE Y NO PUEDE***");
admin.cerrarTarea("1");

//cuidador cierra tarea
console.log("***************");
console.log("***CUIDADOR CIERRA TAREA***");
otroCuidador.cerrarTarea("1");

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS AL BB***");
console.log(bb.tareas);

console.log("***************");
console.log("***TODAS LAS TAREAS DEL CUIDADOR QUE ESTAN PENDIENTES***");
console.log(otroCuidador.dameTareasSinFinalizar());

console.log("***************");
console.log("***TODAS LAS TAREAS DEL CUIDADOR QUE ESTAN FINALIZADAS***");
console.log(otroCuidador.dameTareasFinalizadas());

console.log("***************");
console.log("***TODAS LAS TAREAS DEL ADMIN QUE ESTAN PENDIENTES***");
console.log(admin.dameTareasSinFinalizar());

console.log("***************");
console.log("***TODAS LAS TAREAS DEL ADMIN QUE ESTAN FINALIZADAS***");
console.log(admin.dameTareasFinalizadas());

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS AL BB QUE ESTAN PENDIENTES***");
console.log(bb.dameTareasSinFinalizar());

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS AL BB  QUE ESTAN FINALIZADAS***");
console.log(bb.dameTareasFinalizadas());

console.log("***************");
console.log("*** CUIDADORES ASOCIADOS A UN BB ***");
console.log(cuidadoresPulpito);

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS A UN CUIDADOR***");
console.log(bb.dameTareasPorIdCuidador("1"));

console.log("***************");
console.log("***CUIDADOR CREA TAREA***");

//cuidador crea tarea
const otraTareaCuidador = unCuidador.crearTarea(
  "2",
  "comprar pañales",
  "alta",
  "Sat Oct 17 2022",
  "1"
);

console.log(otraTarea);

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS A UN CUIDADOR***");
console.log(bb.dameTareasPorIdCuidador("1"));

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS A UN CUIDADOR FINALIZADAS***");
console.log(bb.dameTareasPorIdCuidadorFinalizadas("1"));

console.log("***************");
console.log("***TODAS LAS TAREAS ASOCIADAS A UN CUIDADOR PENDIENTES***");
console.log(bb.dameTareasPorIdCuidadorPendientes("1"));
