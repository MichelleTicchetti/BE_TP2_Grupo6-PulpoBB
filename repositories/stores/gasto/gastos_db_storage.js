import { MongoClient } from "mongodb";

export class GastosDBStorage {
  constructor() {
    this.gastos = [];
    this.url =
      "mongodb+srv://TP2_PulpoBB:TP2_PulpoBB@cluster0.xaaicfa.mongodb.net/?retryWrites=true&w=majority";
    this.dbName = "PulpoBB_app";
    this.collectionName = "Gastos";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  async connect() {
    await this.client.connect();
  }

  async guardar(gasto) {
    await this.collection.insertOne(gasto);
  }

  async buscarTodos() {
    return await this.collection.find({}).toArray();
  }

  async buscarUno(identificador) {
    return this.collection.find({ id: parseInt(identificador) }).toArray();
  }

  eliminar(identificador) {
    this.collection.deleteOne({ id: identificador });
  }

  eliminarTodos() {
    this.collection.deleteMany({});
  }

  saldarGasto(idGasto) {
    this.collection.updateOne(
      { id: idGasto },
      { $set: { gastoSaldado: true } }
    );
  }
}
