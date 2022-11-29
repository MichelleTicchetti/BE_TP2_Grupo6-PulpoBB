import { TareaFactory } from "../factories/tarea_factory.js";
import { TareaRepository } from "../repositories/tarea_repository.js";

export class TareasUseCase {
  async crear(id, detalle, fechaCaducidad) {
    const tarea = new TareaFactory().crear(
      id,
      detalle,
     
      fechaCaducidad
    );

    const responseRepo = new TareaRepository();
    await responseRepo.guardar(tarea);
  }

  async eliminar(id) {
    const responseRepo = new TareaRepository();
    await responseRepo.eliminar(id);
  }

  async eliminarTodos() {
    const responseRepo = new TareaRepository();
    await responseRepo.eliminarTodos();
  }

  async asignarPersona(id, persona) {
    await new TareaRepository().asignarPersona(id, persona);
  }

  listar() {
    return new TareaRepository().buscarTodos();
  }

  async buscar(identificador) {
    return await new TareaRepository().buscarUno(identificador);
  }

  async listarPorEstado(estado) {
    return await new TareaRepository().listarPorEstado(estado);
  }

  async finalizarTarea(id) {
    return await new TareaRepository().finalizarTarea(id);
  }
}
