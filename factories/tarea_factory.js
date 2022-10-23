import { Tarea } from "../models/tarea.js";

export class TareaFactory {
  constructor() {}

  crear(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId) {
    if (!idTarea || !detalle || !prioridad || !pulpitoId) {
      throw new Error();
    }

    return new Tarea(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId);
  }
}
