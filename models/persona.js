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
    this.tareas = [];
    this.rol = rol;
  }
}
