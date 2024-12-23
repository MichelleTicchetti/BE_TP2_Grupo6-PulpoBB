import { PersonaRepository } from "../repositories/persona_repository.js";

export const autenticacionTarea = async (req, res, next) => {
  console.log("Autenticación de creador de tarea");
  const { idCreador } = req.body

  const creadorTarea = await new PersonaRepository().buscarUno(parseInt(idCreador));

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

export const autenticacionGasto = async (req, res, next) => {
  console.log("Autenticación de saldar gasto");
  const { idPersona } = req.query;
  const saldadorGasto = await new PersonaRepository().buscarUno(parseInt(idPersona));

  try {
    if (saldadorGasto[0].rol === "Administrador") {
      next();
    } else {
      console.log("No tiene permisos para esta tarea");
      res.status(401).send();
    }
  } catch (e) {
    res.status(422).json({ message: e.message });
  }
};
