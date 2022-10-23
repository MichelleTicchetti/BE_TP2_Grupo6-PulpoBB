import assert, { AssertionError } from "assert";
import chai from "chai";
import { Asociar } from "../../commands/asociarPersonaPulpo";
import { PersonaFactory } from "../../factories/persona_factory";

const expect = chai.expect;

describe("Asociar", () => {
  describe("#run()", () => {
    it("asocia un administrador a un pulpo bb", () => {
      //Arrange
      const administrador = new PersonaFactory().crear(
        "1",
        "Juan Perez",
        "jperez@gmail.com",
        "Padre",
        USUARIOS.ADMINISTRADOR
      );

      const pulpoBb = new PulpoBbFactory().crear(
        id,
        fechaNac,
        nombre,
        peso,
        carnetObraSocial,
        estatura
      );

      const asociar = new Asociar(administrador, pulpoBb);
      expect(administrador.pulpitos.length.to.equal(0));
      expect(pulpoBb.administradores.length.to.equal(0));

      //Act
      administrador.asociar(pulpoBb);
      asociar.run();

      //Assert
      expect(administrador.pulpitos.length.to.equal(1));
      expect(pulpoBb.administradores.length.to.equal(1));
    });
  });
});
