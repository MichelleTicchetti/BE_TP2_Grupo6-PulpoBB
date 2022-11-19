import assert, { AssertionError } from "assert";
import chai from "chai";

import { Tarea } from "../models/tarea.js";

var expect = chai.expect;

describe("Tarea", () => {
  describe("atributos", () => {
    it("debe tener un atributo id", () => {
      // Arrange
      const tarea = new Tarea(
        "1",
        "Llevar al pediatra",
        "26 de septiembre de 2022",
        "1",
        "Maria Fernandez"
      );
      const atributosDeLaTarea = Object.keys(tarea);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaTarea[0], "idTarea");
    });

    it("debe tener un atributo detalle", () => {
      // Arrange
      const tarea = new Tarea(
        "1",
        "Llevar al pediatra",
        "26 de septiembre de 2022",
        "1",
        "Maria Fernandez"
      );
      const atributosDeLaTarea = Object.keys(tarea);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaTarea[1], "detalle");
    });

    it("debe tener un atributo fecha de creación", () => {
      // Arrange
      const tarea = new Tarea(
        "1",
        "Llevar al pediatra",
        "26 de septiembre de 2022",
        "1",
        "Maria Fernandez"
      );
      const atributosDeLaTarea = Object.keys(tarea);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaTarea[2], "fechaCreacion");
    });

    it("debe tener un atributo fecha de caducidad", () => {
      // Arrange
      const tarea = new Tarea(
        "1",
        "Llevar al pediatra",
        "26 de septiembre de 2022",
        "1",
        "Maria Fernandez"
      );
      const atributosDeLaTarea = Object.keys(tarea);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaTarea[4], "fechaCaducidad");
    });
  });
  describe("#constructor()", () => {
    describe("con datos válidos", () => {
      it("crea tarea", () => {
        const tarea = new Tarea(
          "1",
          "Llevar al pediatra",
          "26 de septiembre de 2022",
          "1",
          "Maria Fernandez"
        );

        expect(tarea)
          .to.have.property("detalle")
          .with.equal("Llevar al pediatra");
        expect(tarea).to.have.property("estado").with.equal("Pendiente");
      });
    });
    describe("con datos inválidos", () => {
      it("impide la creación de una tarea", () => {
        const tarea = () => {
          const tareaErronea = new Tarea();
        };

        expect(tarea).to.throw(Error);
      });
    });
  });
});
