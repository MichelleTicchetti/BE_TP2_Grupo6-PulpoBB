import { GastoFactory } from "../factories/gasto_factory.js";
import { GastoRepository } from "../repositories/gasto_repository.js";

export class GastosUseCase {
  async buscar(identificador) {
    return await new GastoRepository().buscarUno(identificador);
  }

  async crear(id, monto, detalle) {
    const gasto = new GastoFactory().crear(id, monto, detalle);
    const responseRepo = new GastoRepository();
    await responseRepo.guardar(gasto);
  }

  async eliminar(id) {
    const responseRepo = new GastoRepository();
    await responseRepo.eliminar(id);
  }

  async eliminarTodos() {
    const responseRepo = new GastoRepository();
    await responseRepo.eliminarTodos();
  }

  listar() {
    return new GastoRepository().buscarTodos();
  }

  saldarGasto(idGasto) {
    return new GastoRepository().saldarGasto(idGasto);
  }
}
