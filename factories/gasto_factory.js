import { Gasto } from "../models/gasto.js";

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
