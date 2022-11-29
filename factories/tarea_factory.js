import { Tarea } from "../models/tarea.js";

export class TareaFactory {
  constructor() {}

  crear(id, detalle, fechaCaducidad) {
    if (!id || !detalle ) {
      throw new Error("Faltan atributos");
    }

    return new Tarea(id, detalle, fechaCaducidad);
  }
}
