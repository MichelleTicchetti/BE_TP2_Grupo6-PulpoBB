import { USUARIOS } from "../models/usuario.js";

export class AsociarPersonaPulpo {
  constructor(persona, pulpoBb) {
    this.persona = persona;
    this.pulpoBb = pulpoBb;
  }

  run() {
    this.persona.pulpitos.push(this.pulpoBb);
    this.pulpoBb.personas.push(this.persona);
  }
}
