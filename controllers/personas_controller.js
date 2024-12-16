import { PersonasService } from "../services/personas.js";

export const listarPersonas = async (req, res, next) => {
  console.log("ejecución caso de uso: listar personas");

  try {
    const responseRepo = await new PersonasService().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarPersonasPorRol = async (req, res, next) => {
  console.log("ejecución caso de uso: listar personas por rol");

  const { rol } = req.params;

  try {
    const responseRepo = await new PersonasService().listarPorRol(rol);
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarPersonaPorId = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar persona por id");

  const { id } = req.params;

  try {
    const responseObject = await new PersonasService().buscar(parseInt(id));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearPersona = async (req, res, next) => {
  console.log("ejecución caso de uso: crear persona");

  const { id, nombreApellido, email, vinculo, rol, idPulpo } = req.body;

  try {
    const responseObject = await new PersonasService().crear(
      id,
      nombreApellido,
      email,
      vinculo,
      rol,
      idPulpo
    );
    // await new PulpoBbsService().asociarPersona(idPulpo, id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarPersona = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar persona");

  const { id } = req.params;

  try {
    const responseObject = await new PersonasService().eliminar(parseInt(id));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarPersonas = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todas las personas");

  try {
    const responseObject = await new PersonasService().eliminarTodos();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
