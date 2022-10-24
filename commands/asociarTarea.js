export class AsociarTarea {
  constructor(tarea, pulpoBb, asignadoId) {
    this.tarea = tarea;
    this.pulpoBb = pulpoBb;
    this.asignadoId = asignadoId;
  }

  run() {
    const persona = this.pulpoBb.damePersonaPorId(asignadoId);
    this.pulpoBb.tareas.push(this.tarea);
    this.tarea.personaAsociada = persona;
  }
}
