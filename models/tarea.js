import { CerrarTarea } from "../commands/cerrarTarea.js";

export class Tarea {
  constructor(id, detalle, fechaCaducidad) {
    if (
      !id ||
      !detalle ||
      !fechaCaducidad
    ) {
      throw new Error();
    }

    this.id = id;
    this.detalle = detalle;
    this.fechaCreacion = Date();
    this.fechaCierre = null;
    this.fechaCaducidad = fechaCaducidad;
    this.estado = "Pendiente";
    this.personaAsignada = null;
    /* this.nombreCreador = nombreCreador; */
    /* this.pulpitoId = pulpitoId; */
  }

  asignarPersona(personaAsignada) {
    this.personaAsignada = personaAsignada;
  }

  finalizar() {
    this.estado = "Finalizada";
    this.fechaCierre = Date();
  }
}
