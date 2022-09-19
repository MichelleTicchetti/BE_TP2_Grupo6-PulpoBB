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
  }

  mostrarTareas() {
    return this.tareas;
  }

  crearTarea(descripcion) {
    const tareaCreada = new Tarea(descripcion);
    this.tareas.push(tareaCreada);
    return tareaCreada;
  }

  cerrarTarea(tareaACerrar) {
    const index = this.tareas.indexOf(tareaACerrar);
    if (index > -1) {
      tareaACerrar.cerrarTarea();
    } else {
      console.log("No existe esa tarea");
    }
  }
}
