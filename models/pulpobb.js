import { Gasto } from "./gasto.js";
export class PulpoBb {
  constructor(id, fechaNac, nombre, peso, carnetObraSocial, estatura) {
    if (!fechaNac || !nombre || !peso || !carnetObraSocial || !estatura) {
      throw new Error();
    }
    this.id = id;
    this.fechaNac = fechaNac;
    this.nombre = nombre;
    this.peso = peso;
    this.carnetObraSocial = carnetObraSocial;
    this.estatura = estatura;
    this.gastos = [];
  }

  crearGasto(monto, detalle) {
    let gastoCreado = new Gasto(monto, detalle);
    this.gastos.push(gastoCreado);
    return gastoCreado;
  }

  mostrarGastototal() {
    let acum = 0;
    this.gastos.forEach((gasto) => (acum += gasto.monto));
    return acum;
  }
}
