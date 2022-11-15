import { PulpoBbsUseCase } from "../use_cases/pulpos.js";

export const buscarPulposController = async (req, res, next) => {
  console.log("ejecución caso de uso: listar pulpos");

  try {
    const responseRepo = await new PulpoBbsUseCase().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarPulpoIdController = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar pulpo por id");

  const { nombre } = req.params;

  try {
    const responseObject = await new PulpoBbsUseCase().buscar(nombre);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearPulpoBbsController = async (req, res, next) => {
  console.log("ejecución caso de uso: crear pulpo BB");

  const { id, fechaNac, nombre, peso, carnetObraSocial, estatura } = req.body;

  try {
    const responseObject = await new PulpoBbsUseCase().crear(
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

export const eliminarPulpoBbsController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar pulpo bb");

  const { id } = req.body;

  try {
    const responseObject = await new PulpoBbsUseCase().eliminar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
