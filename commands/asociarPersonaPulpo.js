export class AsociarPersonaPulpo {
  constructor(persona, pulpo) {
    this.persona = persona;
    this.pulpo = pulpo;
  }

  run() {
    this.persona.pulpitos.push(this.pulpo);
    this.pulpo.personas.push(this.persona);
  }
}
