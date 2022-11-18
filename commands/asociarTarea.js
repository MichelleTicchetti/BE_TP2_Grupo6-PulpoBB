export class AsociarTarea {
  constructor(tarea, persona) {
    this.tarea = tarea;
    this.persona = persona;
  }

  run() {
    try {
      return this.tarea;
    } catch (e) {
      console.error(e);
    }
  }
}
