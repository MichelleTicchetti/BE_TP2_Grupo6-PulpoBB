import { Persona } from "../models/persona.js";
import { USUARIOS } from "../models/usuario.js";

export class GastoFactory {
  constructor() {}

  crear(monto, detalle) {
    if (!monto || !detalle) {
      throw new Error();
    } else {
      return new Gasto(monto, detalle);
    }
  }
}
