export class PulpoBb {
  constructor(id, fechaNac, nombre, peso, carnetObraSocial, estatura) {
    if (
      !id ||
      !fechaNac ||
      !nombre ||
      !peso ||
      !carnetObraSocial ||
      !estatura
    ) {
      throw new Error();
    }
    this.id = id;
    this.fechaNac = fechaNac;
    this.nombre = nombre;
    this.peso = peso;
    this.carnetObraSocial = carnetObraSocial;
    this.estatura = estatura;
    this.personas = [];
    this.gastos = [];
    this.tareas = [];
  }
}
