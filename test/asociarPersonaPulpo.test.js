import chai from "chai";
import { AsociarPersonaPulpo } from "../commands/asociarPersonaPulpo.js";
import { Persona } from "../models/persona.js";
import { USUARIOS } from "../models/usuario.js";

const expect = chai.expect;

describe("Asociar", () => {
  describe("#run()", () => {
    it("asocia un administrador a un pulpo bb", () => {
      //Arrange
      const administrador = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
      );

      //Act

      expect(administrador.damePulpitos().length).to.equal(0);

      const pulpoBb = administrador.crearPulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );

      //Assert
      expect(pulpoBb.dameAdministradores().length).to.equal(1);
      expect(pulpoBb.damePersonas().length).to.equal(1);
      expect(pulpoBb.dameAdministradores().length).to.equal(1);

      expect(administrador.damePulpitos().length).to.equal(1);
    });
  });
});
