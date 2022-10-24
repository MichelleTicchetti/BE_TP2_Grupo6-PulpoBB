import { PulpoBbFactory } from "../factories/pulpobb_factory.js";
import { USUARIOS } from "./usuario.js";
import { TareaFactory } from "../factories/tarea_factory.js";
import { AsociarTarea } from "../commands/asociarTarea.js";
import { AsociarPersonaPulpo } from "../commands/asociarPersonaPulpo.js";
import { CerrarTarea } from "../commands/cerrarTarea.js";

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

  //persona.crearTarea(...)
  crearTarea(
    idTarea,
    detalle,
    prioridad,
    fechaCaducidad,
    pulpitoId,
    idAsignado
  ) {
    const tareaCreada = new TareaFactory().crear(
      idTarea,
      detalle,
      prioridad,
      fechaCaducidad,
      pulpitoId,
      this
    );
    const miPulpito = this.buscarPulpito(pulpitoId);

    const asignacionTarea = new AsociarTarea(
      tareaCreada,
      miPulpito,
      idAsignado
    );
    asignacionTarea.run();

    return tareaCreada;
  }

  reasignarTarea(pulpitoId, idTarea, idNuevoAsignado) {
    const miPulpito = this.buscarPulpito(pulpitoId);
    const tarea = miPulpito.buscarTarea(idTarea);
    const nuevoAsignado = miPulpito.buscarCuidador(idNuevoAsignado);
    const asignacionTarea = new AsociarTarea(
      tarea,
      miPulpito,
      nuevoAsignado.id
    );
    asignacionTarea.run();
  }

  cerrarTarea(pulpitoId, idTareaCerrar) {
    const miPulpito = this.buscarPulpito(pulpitoId);
    const miTarea = miPulpito.buscarTarea(idTareaCerrar);
    const finalizacionTarea = new CerrarTarea(miTarea);
    finalizacionTarea.run();
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
