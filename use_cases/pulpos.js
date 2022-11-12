import { PulpoBbFactory } from "../factories/pulpobb_factory.js";
import { PulpoBbRepository } from "../repositories/pulpobb_repository.js";

export class PulpoBbsUseCase {
  async crear(id, fechaNac, nombre, peso, carnetObraSocial, estatura) {
    const pulpito = new PulpoBbFactory().crear(
      id,
      fechaNac,
      nombre,
      peso,
      carnetObraSocial,
      estatura
    );
    const responseRepo = new PulpoBbRepository();
    await responseRepo.guardar(pulpito);
  }

  async eliminar(id) {
    const responseRepo = new PulpoBbRepository().eliminar(id);
    await responseRepo.eliminar(id);
  }
}
