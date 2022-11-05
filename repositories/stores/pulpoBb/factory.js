import { PulpoBbsArrayStorage } from "./pulpoBbs_array_storage.js";
import { PulpoBbsDBStorage } from "./pulpobbs_db_storage.js";

export class PulpoBbsStorageFactory {
  constructor(tipo) {
    this.tipo = tipo;
  }

  storage() {
    if (this.tipo == "db") return new PulpoBbsDBStorage();
    if (this.tipo == "array") return new PulpoBbsArrayStorage();
    throw new Error("el tipo no existe: " + this.tipo);
  }
}
