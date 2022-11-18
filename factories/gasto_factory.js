import { Gasto } from "../models/gasto.js";

export class GastoFactory {
  constructor() {}

  crear(id, monto, detalle) {
    if (!id || !monto || !detalle) {
      throw new Error("Faltan atributos");
    } else {
      return new Gasto(id, monto, detalle);
    }
  }
}
