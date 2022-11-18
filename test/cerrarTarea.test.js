import chai from "chai";
import { CerrarTarea } from "../../commands/cerrarTarea.js";

const expect = chai.expect;

describe("Cerrar Tarea", () => {
  describe("#run()", () => {
    it("cierra una tarea", () => {
      //Arrange
      const tarea = new Tarea(
        "1",
        "Llevar al pediatra",
        "Prioridad Alta",
        "26 de septiembre de 2022",
        "1",
        "Maria Fernandez"
      );
      //Act

      expect(tarea.estado).to.equal("Pendiente");

      const comando = new CerrarTarea(tarea);

      comando.run();

      //Assert
      expect(tarea.estado).to.equal("Finalizada");
    });
  });
});
