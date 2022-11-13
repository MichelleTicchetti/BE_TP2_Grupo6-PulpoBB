import { MongoClient } from "mongodb";

export class TareasDBStorage {
  constructor() {
    this.tareas = [];
    this.url =
      "mongodb+srv://TP2_PulpoBB:TP2_PulpoBB@cluster0.xaaicfa.mongodb.net/?retryWrites=true&w=majority";
    this.dbName = "PulpoBB_app";
    this.collectionName = "Tareas";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  async connect() {
    await this.client.connect();
  }

  async guardar(tarea) {
    await this.collection.insertOne(tarea);
  }

  async buscarTodos() {
    return await this.collection.find({}).toArray();
  }

  async buscarUno(identificador) {
    return await this.collection.find({ idTarea: identificador }).toArray();
  }

  eliminar(identificador) {
    this.collection.deleteOne(identificador);
  }

  async asignar(idTarea, nombrePersona) {
    console.log("nombre persona " + nombrePersona);
    return await this.collection.updateOne(
      { idTarea },
      { $set: { personaAsignada: "ejemplo" } }
    );
  }
}
