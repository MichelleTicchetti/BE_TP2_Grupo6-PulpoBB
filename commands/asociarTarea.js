export class AsociarTarea {
  constructor(tarea, pulpoBb, persona) {
    this.tarea = tarea;
    this.pulpoBb = pulpoBb;
    this.persona = persona;
  }

  run() {
    this.pulpoBb.tareas.push(this.tarea);
    this.tarea.responsable = this.persona;
  }
}
