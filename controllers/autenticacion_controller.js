import { PersonaRepository } from "../repositories/persona_repository.js";

export const AutenticacionAdministrador = async (req, res, next) => {
  console.log("Autenticación de administrador");
  const { creador } = req.body;
  const creadorTarea = await new PersonaRepository().buscarPorNombre(creador);

  if (creadorTarea[0].rol === "Administrador") {
    next();
  } else {
    console.log("No tiene permisos para esta tarea");
    res.status(401).send();
  }
};
