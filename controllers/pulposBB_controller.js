import { PulpoBbsService } from "../services/pulpos.js";

export const listarPulpos = async (req, res, next) => {
  console.log("ejecución caso de uso: listar pulpos");

  try {
    const responseRepo = await new PulpoBbsService().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarPulpoPorId = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar pulpo por id");

  const { id } = req.params;

  try {
    const responseObject = await new PulpoBbsService().buscar(parseInt(id));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearPulpoBb = async (req, res, next) => {
  console.log("ejecución caso de uso: crear pulpo BB");

  const { id, fechaNac, nombre, peso, carnetObraSocial, estatura } = req.body;

  try {
    const responseObject = await new PulpoBbsService().crear(
      id,
      fechaNac,
      nombre,
      peso,
      carnetObraSocial,
      estatura
    );
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarPulpoBb = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar pulpo bb");

  const { nombre } = req.body;

  try {
    const responseObject = await new PulpoBbsService().eliminar(nombre);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarPulpos = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todos los pulpos");

  try {
    const responseObject = await new PulpoBbsService().eliminarTodos();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
