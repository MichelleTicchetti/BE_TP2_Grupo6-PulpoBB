import { PersonasUseCase } from "../use_cases/personas.js";

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

  const { identificador } = req.params;

  try {
    const responseObject = await new PersonasUseCase().buscar(identificador);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearPersonasController = async (req, res, next) => {
  console.log("ejecución caso de uso: crear persona");

  const { id, nombreApellido, email, vinculo, rol } = req.body;

  try {
    const responseObject = await new PersonasUseCase().crear(
      id,
      nombreApellido,
      email,
      vinculo,
      rol
    );
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarPersonasController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar persona");

  const id = req.body;

  try {
    const responseObject = await new PersonasUseCase().eliminar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
