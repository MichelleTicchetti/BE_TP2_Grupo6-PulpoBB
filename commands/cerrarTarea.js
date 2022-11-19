export class CerrarTarea {
  constructor(tarea) {
    this.tarea = tarea;
  }

  run() {
    //regla de negocio
    if (this.tarea.estado === "Pendiente") {
      this.tarea.finalizar();
    } else {
      throw new Error("La tarea ya se encuentra finalizada");
    }
    return this.tarea;
  }
}
