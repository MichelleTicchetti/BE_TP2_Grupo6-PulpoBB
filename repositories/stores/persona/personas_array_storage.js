export class PersonasArrayStorage {
  constructor() {
    this.personas = [];
  }

  guardar(persona) {
    this.personas.push(persona);
  }

  buscarTodos() {
    return this.personas;
  }

  buscarUno(identificador) {
    return this.personas.find((elemento) => elemento.id == identificador);
  }

  buscarPorNombre(nombre) {
    return this.personas.find((elemento) => elemento.nombreApellido == nombre);
  }

  eliminar(identificador) {
    this.personas = this.personas.filter(
      (elemento) => elemento.id != identificador
    );
  }
}
