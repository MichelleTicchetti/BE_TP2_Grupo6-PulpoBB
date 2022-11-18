export class CerrarTarea {
  constructor(tarea) {
    this.tarea = tarea;
  }

  run() {
    try {
      if (this.tarea.estado === "Pendiente") {
        this.tarea.estado = "Finalizada";
        this.tarea.fechaCierre = Date();
      } else {
        console.log("La tarea ya se encuentra finalizada");
      }
      return this.tarea;
    } catch (e) {
      console.error(e);
    }
  }
}
