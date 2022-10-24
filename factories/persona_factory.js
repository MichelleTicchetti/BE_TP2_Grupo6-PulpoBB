import { Persona } from "../models/persona.js";
import { USUARIOS } from "../models/usuario.js";

export class PersonaFactory {
  constructor() {}

  crear(id, nombreApellido, email, vinculo, rol) {
    if (!id || !nombreApellido || !email || !vinculo || !rol) {
      throw new Error();
    }

    if (rol == USUARIOS.ADMINISTRADOR || rol == USUARIOS.CUIDADOR) {
      return new Persona(id, nombreApellido, email, vinculo, rol);
    } else {
      throw new Error("Rol inexistente");
    }
  }
}
