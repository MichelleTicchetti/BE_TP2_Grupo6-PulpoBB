import { TareaFactory } from "../factories/tarea_factory.js";
import { TareaRepository } from "../repositories/tarea_repository.js";

export class TareasService {
  async crear(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId, idCreador) {
    const tarea = new TareaFactory().crear(
      idTarea,
      detalle,
      prioridad,
      fechaCaducidad,
      pulpitoId,
      idCreador
    );

    const responseRepo = new TareaRepository();
    await responseRepo.guardar(tarea);
    return tareaCreada;
  }

  async eliminar(id) {
    const responseRepo = new TareaRepository();
    await responseRepo.eliminar(id);
  }

  async eliminarTodos() {
    const responseRepo = new TareaRepository();
    await responseRepo.eliminarTodos();
  }

  async asignarPersona(idTarea, persona) {
    await new TareaRepository().asignarPersona(idTarea, persona);
  }

  listar() {
    return new TareaRepository().buscarTodos();
  }

  async buscar(identificador) {
    return await new TareaRepository().buscarUno(identificador);
  }

  async listarPorEstado(estado) {
    console.log(estado)
    return await new TareaRepository().listarPorEstado(estado);
  }

  async finalizarTarea(idTarea) {
    return await new TareaRepository().finalizarTarea(idTarea);
  }
}
