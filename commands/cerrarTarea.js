export class CerrarTarea {
  constructor(tarea) {
    this.tarea = tarea;
  }

  run() {
    if (this.tarea.realizada === false) {
      this.tarea.realizada = true;
      this.tarea.fechaCierre = Date();
    }
    return this.tarea;
  }
}
