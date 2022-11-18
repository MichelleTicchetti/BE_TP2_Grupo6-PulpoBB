import assert, { AssertionError, notEqual } from "assert";
import { PulpoBb } from "../models/pulpobb.js";
import chai from "chai";

var expect = chai.expect;

describe("PulpoBb", () => {
  describe("atributos", () => {
    it("tiene atributo id", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      const atributoDelPulpo = Object.keys(pulpo);
      // Act
      //Assert
      assert.equal(atributoDelPulpo[0], "id");
    });
    it("tiene atributo Fecha", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      const atributoDelPulpo = Object.keys(pulpo);
      // Act
      //Assert
      assert.equal(atributoDelPulpo[1], "fechaNac");
    });
    it("tiene atributo nombre", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      const atributoDelPulpo = Object.keys(pulpo);
      // Act
      //Assert
      assert.equal(atributoDelPulpo[2], "nombre");
    });
    it("tiene atributo peso", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      const atributoDelPulpo = Object.keys(pulpo);
      // Act
      //Assert
      assert.equal(atributoDelPulpo[3], "peso");
    });
    it("tiene atributo carnetObraSocial", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      const atributoDelPulpo = Object.keys(pulpo);
      // Act
      //Assert
      assert.equal(atributoDelPulpo[4], "carnetObraSocial");
    });
    it("tiene atributo estatura", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      const atributoDelPulpo = Object.keys(pulpo);

      assert.equal(atributoDelPulpo[5], "estatura");
    });
  });
  describe("#constructor()", () => {
    describe("con datos válidos", () => {
      it("crea Pulpo", () => {
        const pulpo = new PulpoBb(
          "1",
          "14-dic-1984",
          "Joaquin",
          "3kg",
          "123456789",
          "50cm"
        );

        expect(pulpo).to.have.property("id").with.equal("1");
        expect(pulpo).to.have.property("nombre").with.equal("Joaquin");
      });
    });
    describe("con datos inválidos", () => {
      it("impide la creación de una Persona", () => {
        const creador = () => {
          const pulpoErroneo = new PulpoBb();
        };

        expect(creador).to.throw(Error);
      });
    });
  });
});
