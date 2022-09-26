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

  //crearCuidador() {}

  //crearAdmin() {}

  //asignarTarea() {}

  //cierreDeGastos() {}
}
