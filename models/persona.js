import { PulpoBbFactory } from "../factories/pulpobb_factory.js";
import { USUARIOS } from "./usuario.js";
import { TareaFactory } from "../factories/tarea_factory.js";
import { PersonaFactory } from "../factories/persona_factory.js";
import { AsociarTarea } from "../commands/asociarTarea.js";
import { AsociarPersonaPulpo } from "../commands/asociarPersonaPulpo.js";
import { CerrarTarea } from "../commands/cerrarTarea.js";

export class Persona {
  constructor(id, nombreApellido, email, vinculo, rol, idPulpo) {
    if (!id || !nombreApellido || !email || !vinculo || !rol || !idPulpo) {
      throw new Error();
    }
    this.id = id;
    this.nombreApellido = nombreApellido;
    this.email = email;
    this.vinculo = vinculo;
    this.pulpitos = [];
    this.tareas = [];
    this.rol = rol;
    this.idPulpo = idPulpo;
  }
}
