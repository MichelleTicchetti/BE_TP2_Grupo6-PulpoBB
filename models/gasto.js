export class Gasto {
  /*blablalbabla*/
  constructor(monto, detalle) {
    this.monto = monto;
    this.detalle = detalle;
    this.gastoSaldado = false;
    this.fechaCreacion = Date();
  }

  saldarGasto() {
    this.gastoSaldado = true;
    this.monto = 0;
  }/*gasto*/
}
