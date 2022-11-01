import assert, { AssertionError } from "assert";
import chai from "chai";
import { PulpoBbFactory } from "../../factories/pulpobb_factory.js";
import { PulpoBbRepository } from "../../repositories/pulpobb_repository.js";

const expect = chai.expect;

describe("PulpoBb Repository", () => {
  describe("#guardar()", () => {
    it("crea un pulpo en el repo", () => {
      // Arrange
      const pulpoBb = new PulpoBbFactory().crear(
        "123",
        "14-dic-1984",
        "joaco",
        "15",
        "34567",
        "1.77"
      );

      const repo = new PulpoBbRepository();
      repo.guardar(pulpoBb);

      expect(repo.buscarTodos()).to.include(pulpoBb);
    });
  });
});
