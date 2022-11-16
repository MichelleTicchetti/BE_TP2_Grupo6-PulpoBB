import { PulpoBbFactory } from "../factories/pulpobb_factory.js";
import { PulpoBbRepository } from "../repositories/pulpobb_repository.js";

export class PulpoBbsUseCase {
  async buscar(identificador) {
    return await new PulpoBbRepository().buscarUno(identificador);
  }

  listar() {
    return new PulpoBbRepository().buscarTodos();
  }

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

  async eliminar(nombre) {
    const responseRepo = new PulpoBbRepository();
    await responseRepo.eliminar(nombre);
  }

  async eliminarTodos() {
    const responseRepo = new PulpoBbRepository();
    await responseRepo.eliminarTodos();
  }

  async asignarTarea(pulpitoId, idTarea) {
    await new PulpoBbRepository().asignarTarea(pulpitoId, idTarea);
  }

  async asociarPersona(idPulpo, idPersona) {
    await new PulpoBbRepository().asociarPersona(idPulpo, idPersona);
  }
}
