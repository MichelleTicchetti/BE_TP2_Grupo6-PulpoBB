import { TareasArrayStorage } from "./tareas_array_storage.js";
import { TareasDBStorage } from "./tareas_db_storage.js";

export class TareasStorageFactory {
  constructor(tipo) {
    this.tipo = tipo;
  }

  storage() {
    if (this.tipo == "db") return new TareasDBStorage();
    if (this.tipo == "array") return new TareasArrayStorage();
    throw new Error("el tipo no existe: " + this.tipo);
  }
}
