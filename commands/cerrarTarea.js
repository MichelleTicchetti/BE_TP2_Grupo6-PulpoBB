export class CerrarTarea {
  constructor(tarea) {
    this.tarea = tarea;
  }

  run() {
    if (this.tarea.estado === "Pendiente") {
      this.tarea.estado = "Finalizada";
      this.tarea.fechaCierre = Date();
    }
    return this.tarea;
  }
}
