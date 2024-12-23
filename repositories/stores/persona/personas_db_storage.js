import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();


export class PersonasDBStorage {
  constructor() {
    this.personas = [];
    this.url = process.env.MONGO_URI;
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

  buscarUno(identificador) {
    return this.collection.find({ id: identificador }).toArray();
  }

  buscarPorNombre(nombre) {
    return this.collection.find({ nombreApellido: nombre }).toArray();
  }

  eliminar(identificador) {
    this.collection.deleteOne({ id: identificador });
  }

  eliminarTodos() {
    this.collection.deleteMany({});
  }
}
