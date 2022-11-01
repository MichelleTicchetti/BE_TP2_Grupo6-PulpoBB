export class PulpoBbsArrayStorage {
  constructor() {
    this.pulpoBbs = [];
  }

  guardar(pulpoBb) {
    this.pulpoBbs.push(pulpoBb);
  }

  buscarTodos() {
    return this.pulpoBbs;
  }

  buscarUno(identificador) {
    return this.pulpoBbs.find((elemento) => elemento.id == identificador);
  }

  eliminar(identificador) {
    this.pulpoBbs = this.pulpoBbs.filter(
      (elemento) => elemento.id != identificador
    );
  }
}
