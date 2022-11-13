import { PersonasStorageFactory } from "./stores/persona/factory.js";

export class PersonaRepository {
  constructor(tipo = "db") {
    // Almacen
    this.storage = new PersonasStorageFactory(tipo).storage();
  }

  // constructor(tipo = "array") {
  //   // Almacen
  //   this.storage = new PersonasStorageFactory(tipo).storage();
  // }

  guardar(persona) {
    this.storage.guardar(persona);
  }

  buscarTodos() {
    return this.storage.buscarTodos();
  }

  buscarPorRol(rol) {
    return this.storage.buscarPorRol(rol);
  }

  buscarUno(identificador) {
    return this.storage.buscarUno(identificador);
  }

  eliminar(identificador) {
    this.storage.eliminar(identificador);
  }

  asignarTarea(idPersona, tarea) {
    this.storage.asignarTarea(idPersona, tarea);
  }
}
