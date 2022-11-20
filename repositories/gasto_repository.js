import { GastosStorageFactory } from "./stores/gasto/factory.js";

export class GastoRepository {
  constructor(tipo = "db") {
    // Almacen
    this.storage = new GastosStorageFactory(tipo).storage();
  }

  // constructor(tipo = "array") {
  //   // Almacen
  //   this.storage = new GastosStorageFactory(tipo).storage();
  // }

  guardar(gasto) {
    this.storage.guardar(gasto);
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

  eliminarTodos() {
    this.storage.eliminarTodos();
  }

  saldarGasto(idGasto) {
    this.storage.saldarGasto(idGasto);
  }
}
