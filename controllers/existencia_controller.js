import { GastoRepository } from "../repositories/gasto_repository.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import { TareaRepository } from "../repositories/tarea_repository.js";

export const verificarExistenciaTarea = async (req, res, next) => {
  console.log("Existencia de tarea");

  const tarea = await new TareaRepository().buscarUno(req.body.idTarea);

  if (tarea === undefined || tarea === null || tarea.length == 0) {
    console.log("No se ha encontrado esa tarea");
    res.status(404).send();
  } else {
    console.log("Se ha encontrado la tarea");
    next();
  }
};

export const verificarExistenciaPersona = async (req, res, next) => {
  const persona = await new PersonaRepository().buscarUno(req.body.idPersona);

  if (persona === undefined || persona === null || persona.length == 0) {
    console.log("No se ha encontrado esa persona");
    res.status(404).send();
  } else {
    console.log("Se ha encontrado la persona");
    next();
  }
};

export const verificarTareaYaExiste = async (req, res, next) => {
  console.log("Existencia de tarea");

  const tarea = await new TareaRepository().buscarUno(req.body.idTarea);

  if (tarea.length > 0) {
    console.log("Ya existe una tarea con ese id");
    res.status(409).send();
  } else {
    console.log("No se ha encontrado esa tarea");
    next();
  }
};

export const verificarExistenciaGasto = async (req, res, next) => {
  console.log("Existencia de gasto");

  const gasto = await new GastoRepository().buscarUno(req.body.idGasto);

  if (gasto === undefined || gasto === null || gasto.length == 0) {
    console.log("No se ha encontrado ese gasto");
    res.status(404).send();
  } else {
    console.log("Se ha encontrado el gasto");
    next();
  }
};
