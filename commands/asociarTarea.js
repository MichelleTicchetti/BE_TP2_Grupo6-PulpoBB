export class AsociarTarea {
  constructor(tareaCreada, pulpoBb, personaAsignada) {
    this.tareaCreada = tareaCreada;
    this.pulpoBb = pulpoBb;
    this.personaAsignada = personaAsignada;
  }

  run() {
    this.tareaCreada.asignarPersona(this.personaAsignada);
    this.pulpoBb.tareas.push(this.tareaCreada);
  }
}
