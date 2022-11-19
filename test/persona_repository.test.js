import assert, { AssertionError } from "assert";
import chai from "chai";
import { PersonaFactory } from "../factories/persona_factory.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import { USUARIOS } from "../models/usuario.js";

const expect = chai.expect;

//crear una bd para los tests para que no popule la bd real

describe("Persona Repository", () => {
  describe("#guardar()", () => {
    it("crea una persona en el repo", async () => {
      // Arrange
      const persona = new PersonaFactory().crear(
        "1",
        "Juan Perez",
        "jperez@gmail.com",
        "Padre",
        USUARIOS.ADMINISTRADOR,
        "1"
      );
      const repo = new PersonaRepository("array");
      repo.guardar(persona);
      expect(await repo.buscarTodos()).to.include(persona);
    });
  });
});
