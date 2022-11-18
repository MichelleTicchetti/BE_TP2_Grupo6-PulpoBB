import { Persona } from "../models/persona.js";
import { USUARIOS } from "../models/usuario.js";

export class PersonaFactory {
  constructor() {}

  crear(id, nombreApellido, email, vinculo, rol, idPulpo) {
    if (!id || !nombreApellido || !email || !vinculo || !rol || !idPulpo) {
      throw new Error("Faltan atributos");
    }

    if (rol == USUARIOS.ADMINISTRADOR || rol == USUARIOS.CUIDADOR) {
      return new Persona(id, nombreApellido, email, vinculo, rol, idPulpo);
    } else {
      throw new Error("Rol inexistente");
    }
  }
}
