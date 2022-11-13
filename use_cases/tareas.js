import { TareaFactory } from "../factories/tarea_factory.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import { TareaRepository } from "../repositories/tarea_repository.js";

export class TareasUseCase {
  async crear(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId, creador) {
    const tarea = new TareaFactory().crear(
      idTarea,
      detalle,
      prioridad,
      fechaCaducidad,
      pulpitoId,
      creador
    );
    const responseRepo = new TareaRepository();
    await responseRepo.guardar(tarea);
  }

  async eliminar(id) {
    const responseRepo = new TareaRepository().eliminar(id);
    await responseRepo.eliminar(id);
  }

  async asignarPersona(idTarea, persona) {
    await new TareaRepository().asignarPersona(idTarea, persona);
  }

  listar() {
    return new TareaRepository().buscarTodos();
  }

  buscar(identificador) {
    return new TareaRepository().buscarUno(identificador);
  }

  async listarPorEstado(estado) {
    return await new TareaRepository().listarPorEstado(estado);
  }

  async listarPorPrioridad(prioridad) {
    return await new TareaRepository().listarPorPrioridad(prioridad);
  }
}
