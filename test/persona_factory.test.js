import assert, { AssertionError } from "assert";
import chai from "chai";
import { PersonaFactory } from "../factories/persona_factory.js";
import { USUARIOS } from "../models/usuario.js";

const expect = chai.expect;

describe("Persona Factory", () => {
  describe("#crear()", () => {
    it("crea una persona con el factory", () => {
      // Arrange
      const persona = new PersonaFactory().crear(
        "1",
        "Juan Perez",
        "jperez@gmail.com",
        "Padre",
        USUARIOS.ADMINISTRADOR,
        "1"
      );

      expect(persona)
        .to.have.property("nombreApellido")
        .with.equal("Juan Perez");
    });
  });
});
