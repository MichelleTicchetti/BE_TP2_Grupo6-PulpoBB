// import { MongoClient } from "mongodb";

// export class PulpoBbsDBStorage {
//   constructor() {
//     this.personas = [];
//     // this.url =
//     //   "mongodb+srv://juanpablo:juanpablo@cluster0.doavcex.mongodb.net/?retryWrites=true&w=majority";
//     // this.dbName = "Carreras";
//     this.collectionName = "personas";
//     this.client = new MongoClient(this.url);
//     this.connect();
//     this.db = this.client.db(this.dbName);
//     this.collection = this.db.collection(this.collectionName);
//   }

//   async connect() {
//     await this.client.connect();
//   }

//   async guardar(persona) {
//     await this.collection.insertOne(persona);
//   }

//   async buscarTodos() {
//     return await this.collection.find({}).toArray();
//   }

//   async buscarUno(identificador) {
//     return this.collection.find({ nombre: identificador }).toArray();
//   }

//   eliminar(identificador) {
//     this.collection.deleteOne();
//   }
// }
