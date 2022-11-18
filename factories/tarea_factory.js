import { Tarea } from "../models/tarea.js";

export class TareaFactory {
  constructor() {}

  crear(idTarea, detalle, fechaCaducidad, pulpitoId, creador) {
    if (!idTarea || !detalle || !pulpitoId) {
      throw new Error("Faltan atributos");
    }

    return new Tarea(idTarea, detalle, fechaCaducidad, pulpitoId, creador);
  }
}
