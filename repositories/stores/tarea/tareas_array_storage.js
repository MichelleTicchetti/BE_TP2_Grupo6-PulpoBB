export class TareasArrayStorage {
  constructor() {
    this.tareas = [];
  }

  guardar(tarea) {
    this.tareas.push(tarea);
  }

  buscarTodos() {
    return this.tareas;
  }

  buscarUno(identificador) {
    return this.tareas.find((elemento) => elemento.id == identificador);
  }

  eliminar(identificador) {
    this.tareas = this.tareas.filter(
      (elemento) => elemento.id != identificador
    );
  }
}
