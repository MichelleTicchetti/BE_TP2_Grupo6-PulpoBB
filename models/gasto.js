export class Gasto {
  constructor(id, monto, detalle, titulo) {
    if (!id || !monto || !detalle || !titulo) {
      throw new Error();
    }
    this.id = id;
    this.monto = monto;
    this.titulo = titulo;
    this.detalle = detalle;
    this.gastoSaldado = false;
    this.fechaCreacion = Date();
  }
}
