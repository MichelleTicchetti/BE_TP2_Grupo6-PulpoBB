import assert, { AssertionError } from "assert";
import chai from "chai";

import { Persona } from "../models/persona.js";
import { PulpoBb } from "../models/pulpobb.js";
import { Tarea } from "../models/tarea.js";

var expect = chai.expect;

describe("Persona", () => {
  describe("atributos", () => {
    it("debe tener un atributo ID", () => {
      // Arrange
      const persona = new Persona(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDeLaPersona = Object.keys(persona);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaPersona[0], "id");
    });

    it("debe tener un atributo nombreApellido", () => {
      // Arrange
      const persona = new Persona(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDeLaPersona = Object.keys(persona);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaPersona[1], "nombreApellido");
    });

    it("debe tener un atributo email", () => {
      // Arrange
      const persona = new Persona(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDeLaPersona = Object.keys(persona);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaPersona[2], "email");
    });

    it("debe tener un atributo vinculo", () => {
      // Arrange
      const persona = new Persona(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      const atributosDeLaPersona = Object.keys(persona);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaPersona[3], "vinculo");
    });

    it("tiene un listado de pulpitos", () => {
      const persona = new Persona(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );
      expect(persona.pulpitos).to.be.an("array");
    });
  });

  describe("#constructor()", () => {
    describe("con datos válidos", () => {
      it("crea Persona", () => {
        const persona = new Persona(
          "2039",
          "Michelle Ticchetti",
          "mticchetti@gmail.com",
          "Amiga"
        );

        expect(persona).to.have.property("id").with.equal("2039");
        expect(persona)
          .to.have.property("nombreApellido")
          .with.equal("Michelle Ticchetti");
      });
    });
    describe("con datos inválidos", () => {
      it("impide la creación de una Persona", () => {
        const creador = () => {
          const personaErroneo = new Persona();
        };

        expect(creador).to.throw(Error);
      });
    });
  });

  describe("#crearTarea()", () => {
    it("crea una tarea", () => {
      const persona = new Persona(
        "2039",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga"
      );

      const tarea = persona.crearTarea(
        "1",
        "Sacar turno con pediatra",
        "Alta",
        "26 de septiembre de 2022",
        "123"
      );

      expect(tarea)
        .to.have.property("responsable")
        .with.equal("Michelle Ticchetti");
    });
  });
});
