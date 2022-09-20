export class Gasto {
    constructor(monto, detalle) {
      this.monto = monto;
      this.detalle = detalle;
      this.gastoSaldado = false;
    }
  
    saldargasto() {
      this.gastoSaldado = true;
    }
  }
  