import assert, { AssertionError } from "assert";
import chai from "chai";
import { TareaFactory } from "../factories/tarea_factory.js";

const expect = chai.expect;

describe("Tarea Factory", () => {
  describe("#crear()", () => {
    it("crea una tarea con el factory", () => {
      // Arrange
      const tarea = new TareaFactory().crear(
        1,
        "Comprar leche",
        "Tue Oct 18 202",
        1,
        "Juan Lopez"
      );
      expect(tarea).to.have.property("detalle").with.equal("Comprar leche");
    });
  });
});
