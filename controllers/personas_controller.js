import { PersonasUseCase } from "../use_cases/personas.js";
import { PulpoBbsUseCase } from "../use_cases/pulpos.js";

export const buscarPersonasController = async (req, res, next) => {
  console.log("ejecución caso de uso: listar personas");

  try {
    const responseRepo = await new PersonasUseCase().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarPersonasRolController = async (req, res, next) => {
  console.log("ejecución caso de uso: listar personas por rol");

  const { rol } = req.params;

  try {
    const responseRepo = await new PersonasUseCase().listarPorRol(rol);
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarPersonaIDController = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar persona por id");

  const { id } = req.params;

  try {
    const responseObject = await new PersonasUseCase().buscar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearPersonasController = async (req, res, next) => {
  console.log("ejecución caso de uso: crear persona");

  const { id, nombreApellido, email, vinculo, rol, idPulpo } = req.body;

  try {
    const responseObject = await new PersonasUseCase().crear(
      id,
      nombreApellido,
      email,
      vinculo,
      rol,
      idPulpo
    );
    // await new PulpoBbsUseCase().asociarPersona(idPulpo, id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarPersonasController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar persona");

  const { id } = req.body;

  try {
    const responseObject = await new PersonasUseCase().eliminar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarTodosPersonasController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todas las personas");

  try {
    const responseObject = await new PersonasUseCase().eliminarTodos();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
