import { USUARIOS } from "../models/usuario.js";

export class AsociarPersonaPulpo {
  constructor(persona, pulpoBb) {
    this.persona = persona;
    this.pulpoBb = pulpoBb;
  }

  run() {
    this.persona.pulpitos.push(this.pulpoBb);

    if (this.persona.rol == USUARIOS.ADMINISTRADOR) {
      this.pulpoBb.administradores.push(this.persona);
    } else if (this.pulpoBb.rol == USUARIOS.CUIDADOR) {
      this.pulpoBb.cuidadores.push(this.persona);
    } else {
      console.log("Entro aca");
    }
  }
}
