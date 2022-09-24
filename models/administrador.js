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

  crearCuidador() {}

  crearAdmin() {}

  cierreDeGastos() {}
}
