import { GastosArrayStorage } from "./gastos_array_storage.js";
import { GastosDBStorage } from "./gastos_db_storage.js";

export class GastosStorageFactory {
  constructor(tipo) {
    this.tipo = tipo;
  }

  storage() {
    if (this.tipo == "db") return new GastosDBStorage();
    if (this.tipo == "array") return new GastosArrayStorage();
    throw new Error("el tipo no existe: " + this.tipo);
  }
}
