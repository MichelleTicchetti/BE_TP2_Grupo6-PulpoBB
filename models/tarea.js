export class Tarea {
  constructor(detalle, prioridad, fechaCaducidad) {
    if (!detalle || !prioridad) {
      throw new Error();
    }
    this.id = Date.now();
    this.detalle = detalle;
    this.prioridad = prioridad;
    this.fechaCreacion = Date();
    this.fechaCierre = null;
    this.fechaCaducidad = new Date(fechaCaducidad);
    this.realizada = false;
  }

  cerrarTarea() {
    this.realizada = true;
    this.fechaCierre = Date();
  }
}
