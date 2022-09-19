export class Tarea {
  constructor(detalle) {
    this.id = Date.now();
    this.fechaCreacion = Date();
    this.fechaCierre = null;
    this.realizada = false;
    this.detalle = detalle;
  }

  cerrarTarea() {
    this.realizada = true;
  }
}
