export class Tarea {
  constructor(detalle, prioridad) {
    if (!detalle || !prioridad) {
      throw new Error();
    }
    this.id = Date.now();
    this.detalle = detalle;
    this.prioridad = prioridad;
    this.fechaCreacion = Date();
    this.fechaCierre = null;
    this.realizada = false;
  }

  cerrarTarea() {
    this.realizada = true;
  }
}
