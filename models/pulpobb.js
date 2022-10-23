import { Gasto } from "./gasto.js";
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
    this.cuidadores = [];
    this.administradores = [];
    this.gastos = [];
    this.tareas = [];
  }

  dameCuidadores() {
    return this.cuidadores;
  }

  dameAdministradores() {
    return this.administradores;
  }

  dameTareas() {
    return this.tareas;
  }

  dameTareasFinalizadas() {
    const tareasFinalizadas = this.tareas.filter(
      (tarea) => tarea.realizada == true
    );
    return tareasFinalizadas;
  }

  dameTareasSinFinalizar() {
    const tareasPendientes = this.tareas.filter(
      (tarea) => tarea.realizada == false
    );
    return tareasPendientes;
  }

  dameTareasPorIdCuidador(idCuidador) {
    const cuidador = this.buscarCuidador(idCuidador);
    return cuidador.dameTareas();
  }

  dameTareasPorIdCuidadorPendientes(idCuidador) {
    const cuidador = this.buscarCuidador(idCuidador);
    return cuidador.dameTareasSinFinalizar();
  }

  dameTareasPorIdCuidadorFinalizadas(idCuidador) {
    const cuidador = this.buscarCuidador(idCuidador);
    return cuidador.dameTareasFinalizadas();
  }

  guardarTarea(tarea) {
    this.tareas.push(tarea);
  }

  //MÉTODOS DE GASTOS

  dameGastos() {
    this.gastos;
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

  cierreDeGastos() {
    this.gastos.forEach((gasto) => gasto.saldarGasto());
  }

  buscarTarea(tareaId) {
    const tareaBuscada = this.tareas.find((tarea) => tarea.id === tareaId);
    return tareaBuscada;
  }

  buscarCuidador(cuidadorId) {
    const cuidadorBuscado = this.cuidadores.find(
      (cuidador) => cuidador.id === cuidadorId
    );
    return cuidadorBuscado;
  }
}
