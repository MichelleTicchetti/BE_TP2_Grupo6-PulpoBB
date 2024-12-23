import { MongoClient } from "mongodb";
import { PersonaRepository } from "../../persona_repository.js";
import { TareaRepository } from "../../tarea_repository.js";
import dotenv from "dotenv";
dotenv.config();


export class PulpoBbsDBStorage {
  constructor() {
    this.pulposBB = [];
    this.url = process.env.MONGO_URI;   
    this.dbName = "PulpoBB_app";
    this.collectionName = "PulpoBBs";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  async connect() {
    await this.client.connect();
  }

  async guardar(pulpoBb) {
    await this.collection.insertOne(pulpoBb);
  }

  async buscarTodos() {
    return await this.collection.find({}).toArray();
  }

  async buscarUno(identificador) {
    return this.collection.find({ id: identificador }).toArray();
  }

  eliminar(identificador) {
    this.collection.deleteOne({ id: identificador });
  }

  eliminarTodos() {
    this.collection.deleteMany({});
  }

  asignarTarea(pulpitoId, idTarea) {
    const tareaAsignar = new TareaRepository().buscarUno(idTarea);
    this.collection.updateOne(
      { id: pulpitoId },
      { $set: { tareas: [tareaAsignar] } }
    );
  }

  async asociarPersona(idPulpo, idPersona) {
    const personaAsociar = await new PersonaRepository().buscarUno(idPersona);
    console.log(personaAsociar);
    this.collection.updateOne(
      { id: idPulpo },
      { $set: { personas: [personaAsociar] } }
    );
  }
}
