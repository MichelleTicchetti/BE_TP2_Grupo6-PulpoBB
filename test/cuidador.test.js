import assert, { AssertionError } from "assert";
import chai from "chai";

import { Cuidador } from "../models/cuidador.js";
import { Tarea } from "../models/tarea.js";

var expect = chai.expect;

describe("Cuidador", () => {
  describe("atributos", () => {
    it("debe tener un atributo ID", () => {
      // Arrange
      const cuidador = new Cuidador(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDelCuidador = Object.keys(cuidador);

      // Act
      // --

      // Assert
      assert.equal(atributosDelCuidador[0], "id");
    });

    it("debe tener un atributo nombreApellido", () => {
      // Arrange
      const cuidador = new Cuidador(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDelCuidador = Object.keys(cuidador);

      // Act
      // --

      // Assert
      assert.equal(atributosDelCuidador[1], "nombreApellido");
    });

    it("debe tener un atributo email", () => {
      // Arrange
      const cuidador = new Cuidador(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDelCuidador = Object.keys(cuidador);

      // Act
      // --

      // Assert
      assert.equal(atributosDelCuidador[2], "email");
    });

    it("debe tener un atributo vinculo", () => {
      // Arrange
      const cuidador = new Cuidador(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDelCuidador = Object.keys(cuidador);

      // Act
      // --

      // Assert
      assert.equal(atributosDelCuidador[3], "vinculo");
    });

    it("tiene un listado de tareas", () => {
      const cuidador = new Cuidador(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      expect(cuidador.tareas).to.be.an("array");
    });
  });

  describe("#constructor()", () => {
    describe("con datos válidos", () => {
      it("crea Cuidador", () => {
        const cuidador = new Cuidador(
          "2039",
          "Michelle Ticchetti",
          "mticchetti@gmail.com",
          "Amiga"
        );

        expect(cuidador).to.have.property("id").with.equal("2039");
        expect(cuidador)
          .to.have.property("nombreApellido")
          .with.equal("Michelle Ticchetti");
      });
    });
    describe("con datos inválidos", () => {
      it("impide la creación de un Cuidador", () => {
        const creador = () => {
          const cuidadorErroneo = new Cuidador();
        };

        expect(creador).to.throw(Error);
      });
    });
  });

  describe("#crearTarea()", () => {
    it("crea una tarea", () => {
      const cuidador = new Cuidador(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      cuidador.tareas = [];
      cuidador.crearTarea(new Tarea("Sacar turno con pediatra", "Alta"));
      expect(cuidador.tareas.length).to.equal(1);
    });
  });

  describe("#cerrarTarea()", () => {
    it("debe tener un metodo para cerrar la tarea", () => {
      // Arrange
      const cuidador = new Cuidador(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const tarea = cuidador.crearTarea("Sacar turno con pediatra");

      // Act
      cuidador.cerrarTarea(tarea);

      // Assert
      assert.equal(tarea.realizada, true);
    });
  });
});
