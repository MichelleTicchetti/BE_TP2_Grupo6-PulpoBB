import { TareasStorageFactory } from "./stores/tarea/factory.js";

export class TareaRepository {
  constructor(tipo = "db") {
    // Almacen
    this.storage = new TareasStorageFactory(tipo).storage();
  }

  // constructor(tipo = "array") {
  //   // Almacen
  //   this.storage = new TareasStorageFactory(tipo).storage();
  // }

  guardar(tarea) {
    this.storage.guardar(tarea);
  }

  buscarTodos() {
    return this.storage.buscarTodos();
  }

  buscarUno(identificador) {
    return this.storage.buscarUno(identificador);
  }

  listarPorEstado(estado) {
    return this.storage.listarPorEstado(estado);
  }

  listarPorPrioridad(prioridad) {
    return this.storage.listarPorPrioridad(prioridad);
  }

  eliminar(identificador) {
    this.storage.eliminar(identificador);
  }

  asignarPersona(idTarea, persona) {
    this.storage.asignarPersona(idTarea, persona);
  }
}
