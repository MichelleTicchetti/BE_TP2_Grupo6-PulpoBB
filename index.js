import { Administrador } from "./models/administrador.js";

//creo un administrador
const admin = new Administrador("1", "Juan Lopez", "jlopez@gmail.com");

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

//creo cuidador
const unCuidador = admin.crearCuidador(
  "1",
  "Susana Lopez",
  "susy@gmail.com",
  "tia",
  "1"
);

const tareaCreada = admin.crearTarea(
  "1",
  "comprar pañales",
  "alta",
  "Tue Oct 18 2022",
  "1"
);

console.log(tareaCreada);

const otroCuidador = admin.crearCuidador(
  "2",
  "Juan Lopez",
  "juan@gmail.com",
  "tio",
  "1"
);

//pulpitoId, idTarea, idNuevoResponsable
admin.reasignarTarea("1", "1", "1");

console.log(tareaCreada);

admin.reasignarTarea("1", "1", "2");

console.log(tareaCreada);

//pulpitoId, idTareaCerrar
admin.cerrarTarea("1", "1");

console.log(tareaCreada);
