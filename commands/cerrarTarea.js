export class CerrarTarea {
  constructor(tarea) {
    this.tarea = tarea;
  }

  run() {
    console.log("mi tarea: " + this.tarea.realizada);
    if (this.tarea.realizada === false) {
      this.tarea.realizada = true;
      this.tarea.fechaCierre = Date();
    }
    return this.tarea;
  }
}
