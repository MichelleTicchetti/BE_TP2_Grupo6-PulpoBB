import { TareaStorageFactory } from "./stores/tarea/factory.js";

export class TareaRepository {
  constructor(tipo = "db") {
    // Almacen
    this.storage = new TareaStorageFactory(tipo).storage();
  }

  // constructor(tipo = "array") {
  //   // Almacen
  //   this.storage = new TareaStorageFactory(tipo).storage();
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

  eliminar(identificador) {
    this.storage.eliminar(identificador);
  }
}
