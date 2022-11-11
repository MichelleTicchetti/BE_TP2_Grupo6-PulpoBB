import { PersonasUseCase } from "../use_cases/personas.js";

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
