export class AsociarTarea {
  constructor(tarea, persona) {
    this.tarea = tarea;
    this.persona = persona;
  }

  run() {
    //regla de negocio
    if (this.tarea.estado === "Pendiente") {
      this.tarea.asignarPersona(this.persona);
    } else {
      throw new Error("La tarea ya se encuentra finalizada");
    }
    return this.tarea;
  }
}
