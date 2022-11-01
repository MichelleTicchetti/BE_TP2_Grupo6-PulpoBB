import { PulpoBbStorageFactory } from "./stores/pulpoBb/factory.js";

export class PulpoBbRepository {
  // constructor(tipo = "db") {
  //   // Almacen
  //   this.storage = new PulpoBbStorageFactory(tipo).storage();
  // }

  constructor(tipo = "array") {
    // Almacen
    this.storage = new PulpoBbStorageFactory(tipo).storage();
  }

  guardar(pulpoBb) {
    this.storage.guardar(pulpoBb);
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
