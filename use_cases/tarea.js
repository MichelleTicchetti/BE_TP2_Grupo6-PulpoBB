import { TareaFactory } from "../factories/tarea_factory.js";
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
}
