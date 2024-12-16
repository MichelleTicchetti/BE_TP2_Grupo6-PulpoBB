import { Tarea } from "../models/tarea.js";

export class TareaFactory {
  constructor() {}

  crear(idTarea, detalle, fechaCaducidad, pulpitoId, idCreador) {
    if (!idTarea || !detalle || !pulpitoId || !idCreador) {
      throw new Error("Faltan atributos");
    }

    return new Tarea(idTarea, detalle, fechaCaducidad, pulpitoId, idCreador);
  }
}
