import { Gasto } from "./gasto.js";
import { USUARIOS } from "./usuario.js";
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

  damePersonas() {
    return this.personas;
  }

  dameCuidadores() {
    const cuidadores = this.personas.filter(
      (persona) => persona.rol === USUARIOS.CUIDADOR
    );
    return cuidadores;
  }

  dameAdministradores() {
    const admins = this.personas.filter(
      (persona) => persona.rol === USUARIOS.ADMINISTRADOR
    );
    console.log("Admins: " + admins);
    return admins;
  }

  damePersonaPorId(idPersona) {
    const personaBuscada = this.personas.find(
      (persona) => persona.id === idPersona
    );
    return personaBuscada;
  }

  dameTareas() {
    return this.tareas;
  }

  dameTareasFinalizadas() {
    if (this.tareas.length > 0) {
      const tareasFinalizadas = this.tareas.filter(
        (tarea) => tarea.realizada === true
      );
      return tareasFinalizadas;
    } else {
      throw new Error("No tiene tareas");
    }
  }

  dameTareasSinFinalizar() {
    if (this.tareas.length > 0) {
      const tareasPendientes = this.tareas.filter(
        (tarea) => tarea.realizada == false
      );
      return tareasPendientes;
    } else {
      throw new Error("No tiene tareas");
    }
  }

  dameTareasPorIdPersona(idPersona) {
    const tareasPersona = this.tareas.filter(
      (tarea) => tarea.responsable.id == idPersona
    );
    return tareasPersona;
  }

  dameTareasPorIdPersonaPendientes(idPersona) {
    const tareasPendientes = this.tareas.filter(
      (tarea) => tarea.responsable.id == idPersona && !tarea.realizada
    );
    return tareasPendientes;
  }

  dameTareasPorIdPersonaFinalizadas(idPersona) {
    const tareasPendientes = this.tareas.filter(
      (tarea) => tarea.responsable.id == idPersona && tarea.realizada
    );
    return tareasFinalizadas;
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
}
