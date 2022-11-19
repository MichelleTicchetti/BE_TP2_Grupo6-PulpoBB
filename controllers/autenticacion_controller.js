import { PersonaRepository } from "../repositories/persona_repository.js";

export const autenticacionTarea = async (req, res, next) => {
  console.log("Autenticación de administrador");
  const { creador } = req.body;
  const creadorTarea = await new PersonaRepository().buscarPorNombre(creador);

  try {
    if (creadorTarea[0].rol === "Administrador") {
      next();
    } else {
      console.log("No tiene permisos para esta tarea");
      res.status(401).send();
    }
  } catch (e) {
    res.status(422).json({ message: e.message });
  }
};
