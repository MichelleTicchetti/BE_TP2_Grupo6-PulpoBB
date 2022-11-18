import { CerrarTarea } from "../commands/cerrarTarea.js";

export class Tarea {
  constructor(idTarea, detalle, fechaCaducidad, pulpitoId, nombreCreador) {
    if (
      !idTarea ||
      !detalle ||
      !fechaCaducidad ||
      !pulpitoId ||
      !nombreCreador
    ) {
      throw new Error();
    }

    this.idTarea = idTarea;
    this.detalle = detalle;
    this.fechaCreacion = Date();
    this.fechaCierre = null;
    this.fechaCaducidad = new Date(fechaCaducidad);
    this.estado = "Pendiente";
    this.personaAsignada = null;
    this.nombreCreador = nombreCreador;
    this.pulpitoId = pulpitoId;
  }

  asignarPersona(personaAsignada) {
    this.personaAsignada = personaAsignada;
  }

  finalizar() {
    this.estado = "Finalizada";
    this.fechaCierre = Date();
  }
}
