import { PersonaFactory } from "../factories/persona_factory.js";
import { PersonaRepository } from "../repositories/persona_repository.js";

export class PersonasUseCase {
  async crear( nombreApellido, email, vinculo, rol) {
    const persona = new PersonaFactory().crear(
      nombreApellido,
      email,
      vinculo,
      rol,
     
    );
    const responseRepo = new PersonaRepository();
    await responseRepo.guardar(persona);
  }

  async eliminar(id) {
    const responseRepo = new PersonaRepository();
    await responseRepo.eliminar(id);
  }

  async eliminarTodos() {
    const responseRepo = new PersonaRepository();
    await responseRepo.eliminarTodos();
  }

  listar() {
    return new PersonaRepository().buscarTodos();
  }

  async listarPorRol(rol) {
    return await new PersonaRepository().buscarPorRol(rol);
  }

  async buscar(identificador) {
    return await new PersonaRepository().buscarUno(identificador);
  }

  async asignarTarea(idPersona, tarea) {
    await new PersonaRepository().asignarTarea(idPersona, tarea);
  }
}
