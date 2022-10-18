import { Cuidador } from "./cuidador.js";
import { PulpoBb } from "./pulpobb.js";
import { Tarea } from "./tarea.js";
export class Administrador {
  constructor(id, nombreApellido, email) {
    if (!id || !nombreApellido || !email) {
      throw new Error();
    }
    this.id = id;
    this.nombreApellido = nombreApellido;
    this.email = email;
    this.tareas = [];
    this.pulpitos = [];
  }

  crearPulpoBb(id, fechaNac, nombre, peso, carnetObraSocial, estatura) {
    const pulpoBb = new PulpoBb(
      id,
      fechaNac,
      nombre,
      peso,
      carnetObraSocial,
      estatura
    );
    this.pulpitos.push(pulpoBb);
    return pulpoBb;
  }

  crearCuidador(id, nombreApellido, email, vinculo, pulpitoId) {
    const nuevoCuidador = new Cuidador(id, nombreApellido, email, vinculo);
    const pulpito = this.buscarPulpito(pulpitoId);
    nuevoCuidador.pulpitos.push(pulpito);
    pulpito.cuidadores.push(nuevoCuidador);
    return nuevoCuidador;
  }

  dameCuidadoresPulpito(pulpitoId) {
    const pulpito = this.buscarPulpito(pulpitoId);
    return pulpito.dameCuidadores();
  }

  crearTarea(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId) {
    const tareaCreada = new Tarea(idTarea, detalle, prioridad, fechaCaducidad);
    tareaCreada.responsable = this.nombreApellido;
    tareaCreada.responsableEsAdmin = true;
    this.tareas.push(tareaCreada);
    const pulpito = this.buscarPulpito(pulpitoId);
    pulpito.tareas.push(tareaCreada);
    return tareaCreada;
  }

  reasignarTarea(idTarea, idNuevoResponsable, pulpitoId) {
    const miTarea = this.buscarTarea(idTarea);
    const miPulpito = this.buscarPulpito(pulpitoId);
    const miCuidador = miPulpito.buscarCuidadorPorId(idNuevoResponsable);

    miCuidador.agregarTareaAsignada(miTarea);

    const indexTarea = this.tareas.indexOf(miTarea);

    if (indexTarea > -1) {
      this.tareas.splice(indexTarea, 1);
    }
  }

  cerrarTarea(idTareaCerrar) {
    const tareaACerrar = this.buscarTarea(idTareaCerrar);
    const index = this.tareas.indexOf(tareaACerrar);

    if (index >= 0) {
      this.tareas[index].cerrarTarea();
    } else {
      console.log("No existe esa tarea");
    }
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

  dameTareasPulpo(pulpito) {
    pulpito.mostrarTareas();
  }

  cierreDeGastos() {
    this.bb.cierreDeGastos;
  }

  buscarPulpito(pulpitoId) {
    const pulpitoBuscado = this.pulpitos.find(
      (pulpito) => pulpito.id === pulpitoId
    );
    return pulpitoBuscado;
  }

  buscarTarea(tareaId) {
    const tareaBuscada = this.tareas.find((tarea) => tarea.id === tareaId);
    return tareaBuscada;
  }
}
/*una mas*/