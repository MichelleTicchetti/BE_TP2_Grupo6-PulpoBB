export class Tarea {
  constructor(id, detalle, prioridad, fechaCaducidad) {
    if (!id || !detalle || !prioridad) {
      throw new Error();
    }
    this.id = id;
    this.detalle = detalle;
    this.prioridad = prioridad;
    this.fechaCreacion = Date();
    this.fechaCierre = null;
    this.fechaCaducidad = new Date(fechaCaducidad);
    this.realizada = false;
    this.responsable = null;
  }

  cerrarTarea() {
    this.realizada = true;
    this.fechaCierre = Date();
  }
}
