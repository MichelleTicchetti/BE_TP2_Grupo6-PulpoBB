import assert, { AssertionError } from "assert";
import chai from "chai";
import { TareaFactory } from "../factories/tarea_factory.js";
import { TareaRepository } from "../repositories/tarea_repository.js";

const expect = chai.expect;

//crear una bd para los tests para que no popule la bd real

describe("Tarea Repository", () => {
  describe("#guardar()", () => {
    it("crea una tarea en el repo", async () => {
      // Arrange

      const tarea = new TareaFactory().crear(
        1,
        "Comprar leche",
        "Tue Oct 18 202",
        1,
        "Juan Lopez"
      );
      const repo = new TareaRepository("array");
      repo.guardar(tarea);
      expect(await repo.buscarTodos()).to.include(tarea);
    });
  });
});
