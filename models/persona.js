export class Persona {
  constructor( nombreApellido, email, vinculo, rol) {
    if ( !nombreApellido || !email || !vinculo || !rol) {
      throw new Error();
    }
  
    this.nombreApellido = nombreApellido;
    this.email = email;
    this.vinculo = vinculo;
    this.pulpitos = [];
    this.tareas = [];
    this.rol = rol;
  }
}
