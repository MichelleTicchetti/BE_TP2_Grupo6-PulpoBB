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

  asignarPersona(idTarea, persona) {
    this.storage.asignarPersona(idTarea, persona);
  }

  asignarPulpo(idTarea, pulpo) {
    this.storage.asignarPulpo(idTarea, pulpo);
  }

  finalizarTarea(idTarea) {
    this.storage.finalizarTarea(idTarea);
  }
}
