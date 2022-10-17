import { Tarea } from "./tarea.js";
export class Cuidador {
  constructor(id, nombreApellido, email, vinculo) {
    if (!id || !nombreApellido || !email || !vinculo) {
      throw new Error();
    }
    this.id = id;
    this.nombreApellido = nombreApellido;
    this.email = email;
    this.vinculo = vinculo;
    this.tareas = [];
    this.pulpitos = [];
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

  crearTarea(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId) {
    const tareaCreada = new Tarea(idTarea, detalle, prioridad, fechaCaducidad);
    tareaCreada.responsable = this.nombreApellido;
    this.tareas.push(tareaCreada);
    const pulpito = this.buscarPulpito(pulpitoId);
    pulpito.tareas.push(tareaCreada);
    return tareaCreada;
  }

  agregarTareaAsignada(tarea) {
    tarea.responsable = this.nombreApellido;
    tarea.responsableEsAdmin = false;
    this.tareas.push(tarea);
  }

  cerrarTarea(idTarea) {
    const miTarea = this.buscarTarea(idTarea);

    if (miTarea != null) {
      miTarea.cerrarTarea();
    } else {
      console.log("No existe esa tarea");
    }
  }

  buscarPulpito(pulpitoId) {
    const pulpitoBuscado = this.pulpitos.find(
      (pulpo) => pulpo.id === pulpitoId
    );
    return pulpitoBuscado;
  }

  buscarTarea(tareaId) {
    const tareaBuscada = this.tareas.find((tarea) => tarea.id === tareaId);
    return tareaBuscada;
  }
}
