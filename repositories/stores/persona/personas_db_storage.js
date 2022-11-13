import { MongoClient } from "mongodb";

export class PersonasDBStorage {
  constructor() {
    this.personas = [];
    this.url =
      "mongodb+srv://TP2_PulpoBB:TP2_PulpoBB@cluster0.xaaicfa.mongodb.net/?retryWrites=true&w=majority";
    this.dbName = "PulpoBB_app";
    this.collectionName = "Personas";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  async connect() {
    await this.client.connect();
  }

  async guardar(persona) {
    await this.collection.insertOne(persona);
  }

  async buscarTodos() {
    return await this.collection.find({}).toArray();
  }

  buscarPorRol(rolBuscado) {
    return this.collection.find({ rol: rolBuscado }).toArray();
  }

  buscarUno(identificadorBuscado) {
    return this.collection.find({ id: identificadorBuscado }).toArray();
  }

  eliminar(identificador) {
    this.collection.deleteOne(identificador);
  }

  asignarTarea(idPersona, tarea) {
    this.collection.updateOne(
      { idPersona: idPersona },
      { $set: { tareas: tarea } }
    );
  }
}
