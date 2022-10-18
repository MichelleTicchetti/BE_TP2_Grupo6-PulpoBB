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
    const pulpito = this.buscarPulpito(pulpitoId);
    pulpito.guardarTarea(tareaCreada);
    return tareaCreada;
  }

  // //el admin puede definir un responsable al crear una tarea
  // crearTarea(
  //   idTarea,
  //   detalle,
  //   prioridad,
  //   fechaCaducidad,
  //   pulpitoId,
  //   responsable
  // ) {
  //   const tareaCreada = new Tarea(
  //     idTarea,
  //     detalle,
  //     prioridad,
  //     fechaCaducidad,
  //     responsable
  //   );
  //   const pulpito = this.buscarPulpito(pulpitoId);
  //   pulpito.guardarTarea(tareaCreada);
  // }

  reasignarTarea(pulpitoId, idTarea, idNuevoResponsable) {
    const miPulpito = this.buscarPulpito(pulpitoId);
    miPulpito.asignarTarea(idTarea, idNuevoResponsable);
  }

  cerrarTarea(pulpitoId, idTareaCerrar) {
    const miPulpito = this.buscarPulpito(pulpitoId);
    miPulpito.cerrarTarea(idTareaCerrar);
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
}
