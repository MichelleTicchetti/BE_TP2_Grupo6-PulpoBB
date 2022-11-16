export class Gasto {
  constructor(id, monto, detalle) {
    if (!id || !monto || !detalle) {
      throw new Error();
    }
    this.id = id;
    this.monto = monto;
    this.detalle = detalle;
    this.gastoSaldado = false;
    this.fechaCreacion = Date();
  }
}
