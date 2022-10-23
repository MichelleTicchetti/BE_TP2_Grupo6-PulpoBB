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
    const cuidador = this.buscarCuidadorPorId(idCuidador);
    return cuidador.dameTareas();
  }

  dameTareasPorIdCuidadorPendientes(idCuidador) {
    const cuidador = this.buscarCuidadorPorId(idCuidador);
    return cuidador.dameTareasSinFinalizar();
  }

  dameTareasPorIdCuidadorFinalizadas(idCuidador) {
    const cuidador = this.buscarCuidadorPorId(idCuidador);
    return cuidador.dameTareasFinalizadas();
  }

  dameCuidadores() {
    return this.cuidadores;
  }

  buscarCuidadorPorId(idCuidador) {
    return this.cuidadores.find((cuidador) => cuidador.id === idCuidador);
  }

  crearGasto(monto, detalle) {
    let gastoCreado = new Gasto(monto, detalle);
    this.gastos.push(gastoCreado);
    return gastoCreado;
  }

  guardarTarea(tarea) {
    this.tareas.push(tarea);
  }

  mostrarGastototal() {
    let acum = 0;
    this.gastos.forEach((gasto) => (acum += gasto.monto));
    return acum;
  }

  listarGastos() {
    this.gastos;
  }

  cierreDeGastos() {
    this.gastos.forEach((gasto) => gasto.saldarGasto());
  }

  cerrarTarea(idTarea) {
    const miTarea = this.buscarTarea(idTarea);

    if (miTarea != null) {
      miTarea.cerrarTarea();
    } else {
      console.log("No existe esa tarea");
    }
  }

  buscarTarea(tareaId) {
    const tareaBuscada = this.tareas.find((tarea) => tarea.id === tareaId);
    return tareaBuscada;
  }

  asignarTarea(idTarea, idResponsable) {
    const tarea = this.buscarTarea(idTarea);
    tarea.responsable = idResponsable;
  }
}
