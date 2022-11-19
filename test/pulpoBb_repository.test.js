import assert, { AssertionError } from "assert";
import chai from "chai";
import { PulpoBbFactory } from "../factories/pulpobb_factory.js";
import { PulpoBbRepository } from "../repositories/pulpobb_repository.js";

const expect = chai.expect;

//crear una bd para los tests para que no popule la bd real

describe("PulpoBb Repository", () => {
  describe("#guardar()", () => {
    it("crea un pulpo en el repo", async () => {
      // Arrange
      const pulpoBb = new PulpoBbFactory().crear(
        "123",
        "18-ene-2021",
        "Luna",
        "15",
        "34567",
        "1.77"
      );
      const repo = new PulpoBbRepository("array");
      repo.guardar(pulpoBb);
      expect(await repo.buscarTodos()).to.include(pulpoBb);
    });
  });
});
