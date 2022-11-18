import assert, { AssertionError } from "assert";
import chai from "chai";
import { PulpoBbFactory } from "../factories/pulpobb_factory.js";

const expect = chai.expect;

describe("Pulpo Factory", () => {
  describe("#crear()", () => {
    it("crea un pulpo con el factory", () => {
      // Arrange
      const pulpo = new PulpoBbFactory().crear(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );

      expect(pulpo).to.have.property("nombre").with.equal("Joaquin");
    });
  });
});
