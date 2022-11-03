import assert, { AssertionError, notEqual } from "assert";
import { PulpoBb } from "../../models/pulpobb.js";
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
      // Act
      //Assert
      //assert.notEqual(atributoDelPulpo, null); este valida que no sea NULL
      //expect(atributoDelPulpo).equal('1.77'); este valida el valor del atributo
      assert.equal(atributoDelPulpo[5], "estatura");
    });
  });

  describe("#crearGasto()", () => {
    it("crear Gasto", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      pulpo.crearGasto(55, "una compra cualquiera");
      pulpo.crearGasto(33, "otra compra");
      // Act
      expect(pulpo.gastos.length).to.equal(2);
    });
  });
  describe("#mostrarGastototal()", () => {
    it("mostrarGastototal", () => {
      //Arange
      const pulpo = new PulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );
      pulpo.crearGasto(55, "una compra cualquiera");
      pulpo.crearGasto(100, "otro gasto");
      // Act
      expect(pulpo.mostrarGastototal()).to.equal(155);
    });
  });
});
