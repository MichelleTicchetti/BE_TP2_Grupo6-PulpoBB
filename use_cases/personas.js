import { PersonaFactory } from "../factories/persona_factory.js";
import { PersonaRepository } from "../repositories/persona_repository.js";

export class PersonasUseCase {
  async crear(id, nombreApellido, email, vinculo, rol) {
    const persona = new PersonaFactory().crear(
      id,
      nombreApellido,
      email,
      vinculo,
      rol
    );
    const responseRepo = new PersonaRepository();
    await responseRepo.guardar(persona);
  }

  async eliminar(id) {
    const responseRepo = new PersonaRepository().eliminar(id);
    await responseRepo.eliminar(id);
  }
}
