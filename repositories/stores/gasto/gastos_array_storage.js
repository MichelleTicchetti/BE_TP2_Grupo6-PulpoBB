export class GastosArrayStorage {
  constructor() {
    this.gastos = [];
  }

  guardar(gasto) {
    this.gastos.push(gasto);
  }

  buscarTodos() {
    return this.gastos;
  }

  buscarUno(identificador) {
    return this.gastos.find((elemento) => elemento.id == identificador);
  }

  eliminar(identificador) {
    this.gastos = this.gastos.filter(
      (elemento) => elemento.id != identificador
    );
  }
}
