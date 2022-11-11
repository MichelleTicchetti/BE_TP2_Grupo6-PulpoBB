import { GastoFactory } from "../factories/gasto_factory";
import { GastoRepository } from "../repositories/persona_repository.js";

export class GastosUseCase {
  async crear(monto, detalle) {
    const gasto = new GastoFactory().crear(monto, detalle);
    const responseRepo = new GastoRepository();
    await responseRepo.guardar(gasto);
  }

  async eliminar(id) {
    const responseRepo = new GastoRepository().eliminar(id);
    await responseRepo.eliminar(id);
  }
}