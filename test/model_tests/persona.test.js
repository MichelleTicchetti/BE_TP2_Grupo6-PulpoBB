import assert, { AssertionError } from "assert";
import chai from "chai";

import { Persona } from "../../models/persona.js";
import { USUARIOS } from "../../models/usuario.js";

var expect = chai.expect;

describe("Persona", () => {
  describe("atributos", () => {
    it("debe tener un atributo ID", () => {
      // Arrange
      const persona = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
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
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
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
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
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
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
      );
      const atributosDeLaPersona = Object.keys(persona);

      // Act
      // --

      // Assert
      assert.equal(atributosDeLaPersona[3], "vinculo");
    });

    it("tiene un listado de pulpitos", () => {
      const persona = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
      );
      expect(persona.pulpitos).to.be.an("array");
    });
  });

  describe("#constructor()", () => {
    describe("con datos válidos", () => {
      it("crea Persona", () => {
        const persona = new Persona(
          "1",
          "Michelle Ticchetti",
          "mticchetti@gmail.com",
          "Amiga",
          USUARIOS.ADMINISTRADOR
        );

        expect(persona).to.have.property("id").with.equal("1");
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
      const administrador = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
      );

      const pulpo = administrador.crearPulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );

      const tarea = administrador.crearTarea(
        "1",
        "Sacar turno con pediatra",
        "Alta",
        "Tue Oct 18 202",
        "1",
        "1"
      );

      expect(pulpo.tareas.length).to.equal(1);
    });
  });

  describe("#cerrarTarea()", () => {
    it("cierra una tarea", () => {
      const administrador = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.ADMINISTRADOR
      );

      const pulpo = administrador.crearPulpoBb(
        "1",
        "14-dic-1984",
        "Joaquin",
        "3kg",
        "123456789",
        "50cm"
      );

      const tarea = administrador.crearTarea(
        "1",
        "Sacar turno con pediatra",
        "Alta",
        "Tue Oct 18 202",
        "1",
        "1"
      );

      expect(pulpo.dameTareasSinFinalizar().length).to.equal(1);
      expect(pulpo.dameTareasFinalizadas().length).to.equal(0);
      administrador.cerrarTarea(pulpo.id, tarea.id);
      expect(pulpo.dameTareasSinFinalizar().length).to.equal(0);
      expect(pulpo.dameTareasFinalizadas().length).to.equal(1);
    });
  });
});
