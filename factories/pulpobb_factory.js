import { PulpoBb } from "../models/pulpobb.js";

export class PulpoBbFactory {
  constructor() {}

  crear(id, fechaNac, nombre, peso, carnetObraSocial, estatura) {
    if (
      !id ||
      !fechaNac ||
      !nombre ||
      !peso ||
      !carnetObraSocial ||
      !estatura
    ) {
      throw new Error();
    } else {
      return new PulpoBb(
        id,
        fechaNac,
        nombre,
        peso,
        carnetObraSocial,
        estatura
      );
    }
  }
}
