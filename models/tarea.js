import { CerrarTarea } from "../commands/cerrarTarea.js";

export class Tarea {
  constructor(
    idTarea,
    detalle,
    prioridad,
    fechaCaducidad,
    pulpitoId,
    nombreCreador
  ) {
    if (
      !idTarea ||
      !detalle ||
      !prioridad ||
      !fechaCaducidad ||
      !pulpitoId ||
      !nombreCreador
    ) {
      throw new Error();
    }

    //el id deberia ser autoincremental en todas las clases, preguntar como hacerlo
    this.idTarea = idTarea;
    this.detalle = detalle;
    this.prioridad = prioridad;
    this.fechaCreacion = Date();
    this.fechaCierre = null;
    this.fechaCaducidad = new Date(fechaCaducidad);
    this.realizada = false;
    this.personaAsignada = null;
    this.nombreCreador = nombreCreador;
    this.pulpitoId = pulpitoId;
  }

  asignarPersona(persona) {
    this.personaAsignada = persona;
  }
}
