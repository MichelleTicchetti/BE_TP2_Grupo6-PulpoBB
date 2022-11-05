import { Tarea } from "../models/tarea.js";

export class TareaUseCase {
  constructor(persona) {
    this.persona = persona;
  }

  assign(identificador) {
    // if identificador == valid (persona y tarea)
    // tarea = new Tarea(...)
    // TareaRepository.save(tarea)
    // return tarea;
  }
}
