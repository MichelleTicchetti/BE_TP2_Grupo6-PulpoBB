import { PersonasArrayStorage } from "./personas_array_storage.js";
import { PersonasDBStorage } from "./personas_db_storage.js";

export class PersonasStorageFactory {
  constructor(tipo) {
    this.tipo = tipo;
  }

  storage() {
    if (this.tipo == "db") return new PersonasDBStorage();
    if (this.tipo == "array") return new PersonasArrayStorage();
    throw new Error("el tipo no existe: " + this.tipo);
  }
}
