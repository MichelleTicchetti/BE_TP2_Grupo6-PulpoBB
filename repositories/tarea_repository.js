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

  eliminar(identificador) {
    this.storage.eliminar(identificador);
  }

  eliminarTodos() {
    this.storage.eliminarTodos();
  }

  asignarPersona(id, persona) {
    this.storage.asignarPersona(id, persona);
  }

  asignarPulpo(id, pulpo) {
    this.storage.asignarPulpo(id, pulpo);
  }

  finalizarTarea(id) {
    this.storage.finalizarTarea(id);
  }
}
