import { PulpoBbFactory } from "../factories/pulpobb_factory.js";
import { USUARIOS } from "./usuario.js";
import { TareaFactory } from "../factories/tarea_factory.js";
import { AsociarTarea } from "../commands/AsociarTarea.js";
import { AsociarPersonaPulpo } from "../commands/AsociarPersonaPulpo.js";

export class Persona {
  constructor(id, nombreApellido, email, vinculo, rol) {
    if (!id || !nombreApellido || !email || !vinculo || !rol) {
      throw new Error();
    }
    this.id = id;
    this.nombreApellido = nombreApellido;
    this.email = email;
    this.vinculo = vinculo;
    this.pulpitos = [];
    this.rol = rol;
  }

  crearPulpoBb(id, fechaNac, nombre, peso, carnetObraSocial, estatura) {
    if (this.rol == USUARIOS.ADMINISTRADOR) {
      const pulpoBb = new PulpoBbFactory().crear(
        id,
        fechaNac,
        nombre,
        peso,
        carnetObraSocial,
        estatura
      );
      return pulpoBb;
    } else {
      throw new Error("No tiene permisos para esto");
    }
  }

  crearCuidador(id, nombreApellido, email, vinculo) {
    const cuidador = new PersonaFactory().crear(
      id,
      nombreApellido,
      email,
      vinculo,
      USUARIOS.CUIDADOR
    );
  }

  // ASOCIAR persona con Pulpo usando el command
  asociarConPulpoBb(pulpoBb) {
    const asignacionPulpo = new AsociarPersonaPulpo(this, pulpoBb);
    asignacionPulpo.run();
  }

  dameCuidadoresPulpito(pulpitoId) {
    const pulpito = this.buscarPulpito(pulpitoId);
    return pulpito.dameCuidadores();
  }

  //MÉTODOS DE TAREAS

  crearTarea(idTarea, detalle, prioridad, fechaCaducidad, pulpitoId) {
    const tareaCreada = new TareaFactory().crear(
      idTarea,
      detalle,
      prioridad,
      fechaCaducidad,
      pulpitoId
    );
    const miPulpito = this.buscarPulpito(pulpitoId);

    //asocio la tarea al pulpo y asigno la tarea a un responsable
    const asignacionTarea = new AsociarTarea(tareaCreada, miPulpito, this);
    asignacionTarea.run();

    return tareaCreada;
  }

  reasignarTarea(pulpitoId, idTarea, idNuevoResponsable) {
    const miPulpito = this.buscarPulpito(pulpitoId);
    miPulpito.asignarTarea(idTarea, idNuevoResponsable);
  }

  cerrarTarea(pulpitoId, idTareaCerrar) {
    const miPulpito = this.buscarPulpito(pulpitoId);
    miPulpito.cerrarTarea(idTareaCerrar);
  }

  dameTareasPulpo(pulpito) {
    pulpito.dameTareas();
  }

  //MÉTODOS DE GASTOS
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
