import { Gasto } from "../models/gasto.js";

export class GastoFactory {
  constructor() {}

  crear(id, monto, detalle, titulo) {
    if (!id || !monto || !detalle || !titulo) {
      throw new Error("Faltan atributos");
    } else {
      return new Gasto(id, monto, detalle, titulo);
    }
  }
}
