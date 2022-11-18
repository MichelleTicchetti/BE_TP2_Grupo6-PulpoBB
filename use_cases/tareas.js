import { TareaFactory } from "../factories/tarea_factory.js";
import { PulpoBbRepository } from "../repositories/pulpobb_repository.js";
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
    return await new TareaRepository().listarPorEstado(estado);
  }

  async finalizarTarea(idTarea) {
    const tarea = this.buscar(idTarea);
    if (tarea.estado === "Pendiente") {
      return await new TareaRepository().finalizarTarea(idTarea);
    } else {
      throw new Error("La tarea ya se encuentra finalizada");
    }
  }
}
