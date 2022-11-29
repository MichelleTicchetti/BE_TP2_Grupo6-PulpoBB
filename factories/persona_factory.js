import { Persona } from "../models/persona.js";
import { USUARIOS } from "../models/usuario.js";

export class PersonaFactory {
  constructor() {}

  crear(nombreApellido, email, vinculo, rol) {
    if ( !nombreApellido || !email || !vinculo || !rol ) {
      throw new Error("Faltan atributos");
    }

    if (rol == USUARIOS.ADMINISTRADOR || rol == USUARIOS.CUIDADOR) {
      return new Persona(nombreApellido, email, vinculo, rol);
    } else {
      throw new Error("Rol inexistente");
    }
  }
}
