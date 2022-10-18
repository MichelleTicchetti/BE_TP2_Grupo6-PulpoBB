import { Tarea } from "./tarea.js";
export class Cuidador {
  constructor(id, nombreApellido, email, vinculo) {
    if (!id || !nombreApellido || !email || !vinculo) {
      throw new Error();
    }
    //autogenerar id
    this.id = id;
    this.nombreApellido = nombreApellido;
    this.email = email;
    this.vinculo = vinculo;
    this.tareas = [];
    this.pulpitos = [];
  }

  crearTarea(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId) {
    const tareaCreada = new Tarea(idTarea, detalle, prioridad, fechaCaducidad);
    const pulpito = this.buscarPulpito(pulpitoId);
    pulpito.guardarTarea(tareaCreada);
    return tareaCreada;
  }

  //tiene sentido que un cuidador defina el responsable de una tarea o deberia ser por default el mismo?
  crearTarea(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId) {
    const tareaCreada = new Tarea(idTarea, detalle, prioridad, fechaCaducidad);
    tareaCreada.responsable = this.id;
    const pulpito = this.buscarPulpito(pulpitoId);
    pulpito.guardarTarea(tareaCreada);
  }

  cerrarTarea(pulpitoId, tareaId) {
    const pulpito = this.buscarPulpito(pulpitoId);
    pulpito.cerrarTarea(tareaId);
  }

  buscarPulpito(pulpitoId) {
    const pulpitoBuscado = this.pulpitos.find((p) => p.id === pulpitoId);
    return pulpitoBuscado;
  }
}
