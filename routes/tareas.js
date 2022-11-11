import express from "express";
import { TareaRepository } from "../repositories/tarea_repository.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import { TareaUseCase } from "../use_cases/tarea.js";
const router = express.Router();

//GET /tareas/
router.get("/", async function (req, res, next) {
  const responseRepo = await new TareaRepository().buscarTodos();
  res.json(responseRepo);
});

// GET /tareas/:nombre
router.get("/:nombre", async function (req, res, next) {
  const { nombre } = req.params;

  const responseRepo = await new TareaRepository().buscarUno(nombre);

  res.json(responseRepo);
});

router.post("/", async function (req, res, next) {
  //el identificador de la tarea y el id de persona lo tomo del req del body
  const { idPersona, identificador } = req.body;

  //primero necesito una persona
  const persona = await new PersonaRepository().buscarUno(idPersona);

  //le digo que me cree la tarea para la persona del id, con este identificador de la tarea
  const responseRepo = await new TareaUseCase(persona).assign(identificador);
  res.json(responseRepo);
});

export default router;
