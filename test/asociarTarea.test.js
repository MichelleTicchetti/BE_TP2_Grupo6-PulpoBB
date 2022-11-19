import chai from "chai";
import { AsociarTarea } from "../commands/asociarTarea.js";
import { Tarea } from "../models/tarea.js";
import { Persona } from "../models/persona.js";
import { USUARIOS } from "../models/usuario.js";
import { PulpoBb } from "../models/pulpobb.js";

const expect = chai.expect;

describe("Asociar Tarea", () => {
  describe("#run()", () => {
    it("asocia una tarea a un responsable", () => {
      //Arrange
      const tarea = new Tarea(
        "1",
        "Llevar al pediatra",
        "26 de septiembre de 2022",
        "1",
        "Maria Fernandez"
      );
      const persona = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.CUIDADOR,
        "1"
      );

      //Act
      const comando = new AsociarTarea(tarea, persona);

      const tareaAsociada = comando.run();

      //Assert
      expect(tareaAsociada.personaAsignada)
        .to.have.property("nombreApellido")
        .with.equal("Michelle Ticchetti");
    });
    it("no asocia una tarea si ya se encuentra finalizada", () => {
      //Arrange
      const tarea = new Tarea(
        "1",
        "Llevar al pediatra",
        "26 de septiembre de 2022",
        "1",
        "Maria Fernandez"
      );

      const persona = new Persona(
        "1",
        "Michelle Ticchetti",
        "mticchetti@gmail.com",
        "Amiga",
        USUARIOS.CUIDADOR,
        1
      );

      tarea.finalizar();
      //Act

      try {
        const comando = new AsociarTarea(tarea, persona);

        comando.run();
      } catch (err) {
        //Assert
        expect(err).to.eql(new Error("La tarea ya se encuentra finalizada"));
      }
    });
  });
});
