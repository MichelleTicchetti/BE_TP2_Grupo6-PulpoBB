import chai from "chai";
import { PulpoBb } from "../models/pulpobb.js";
import { Persona } from "../models/persona.js";
import { AsociarPersonaPulpo } from "../commands/asociarPersonaPulpo.js";
import { USUARIOS } from "../models/usuario.js";

const expect = chai.expect;

describe("Asociar Persona con Pulpo", () => {
  describe("#run()", () => {
    it("asocia un administrador a un pulpo bb", () => {
      //Arrange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );

      const persona = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR,
        "1"
      );

      expect(pulpo.personas.length).to.equal(0);
      expect(persona.pulpitos.length).to.equal(0);

      //Act

      const comando = new AsociarPersonaPulpo(persona, pulpo);
      comando.run();

      //Assert
      expect(pulpo.personas.length).to.equal(1);
      expect(persona.pulpitos.length).to.equal(1);
    });
  });
});
