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

  crearTarea(detalle, prioridad, fechaCaducidad) {
    const tareaCreada = new Tarea(detalle, prioridad, fechaCaducidad);
    this.tareas.push(tareaCreada);
    return tareaCreada;
  }

  cerrarTarea(tareaACerrar) {
    const index = this.tareas.indexOf(tareaACerrar, 0);

    if (index >= 0) {
      this.tareas[index].cerrarTarea();
    } else {
      console.log("No existe esa tarea");
    }
  }
}
