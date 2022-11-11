import express from "express";
import { TareaRepository } from "../repositories/tarea_repository.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import {
  crearTareasController,
  eliminarTareasController,
} from "../controllers/tareas_controller.js";
const router = express.Router();

//GET /tareas/
router.get("/", async function (req, res, next) {
  const responseRepo = await new TareaRepository().buscarTodos();
  res.json(responseRepo);
});

// GET /tareas/:detalle
router.get("/:detalle", async function (req, res, next) {
  const { detalle } = req.params;

  const responseRepo = await new TareaRepository().buscarUno(detalle);

  res.json(responseRepo);
});

// GET /tareas/:prioridad
router.get("/:prioridad", async function (req, res, next) {
  const { detalle } = req.params;

  const responseRepo = await new TareaRepository().buscarUno(prioridad);

  res.json(responseRepo);
});

// POST caso de uso: crear tarea
router.post(
  "/",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  crearTareasController
);

//DELETE caso de uso: eliminar una tarea por id
router.delete(
  "/",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  eliminarTareasController
);

// // POST caso de uso: asignar tarea???
// router.post("/", async function (req, res, next) {
//   //el identificador de la tarea y el id de persona lo tomo del req del body
//   const { idPersona, identificador } = req.body;

//   //primero necesito una persona
//   const persona = await new PersonaRepository().buscarUno(idPersona);

//   //le digo que me cree la tarea para la persona del id, con este identificador de la tarea
//   const responseRepo = await new TareaUseCase(persona).assign(identificador);
//   res.json(responseRepo);
// });

export default router;
