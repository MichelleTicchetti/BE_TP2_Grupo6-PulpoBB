import express from "express";
import { TareaRepository } from "../repositories/tarea_repository.js";
import {
  crearTareasController,
  eliminarTareasController,
  asignarPersonaTareaController,
  buscarTareasController,
  buscarTareaIdController,
  buscarTareasEstadoController,
  buscarTareasPrioridadController,
} from "../controllers/tareas_controller.js";
const router = express.Router();

// //GET /tareas/
// router.get("/", async function (req, res, next) {
//   const responseRepo = await new TareaRepository().buscarTodos();
//   res.json(responseRepo);
// });

// // GET /tareas/:detalle
// router.get("/id/:identificador", async function (req, res, next) {
//   const { identificador } = req.params;

//   const responseRepo = await new TareaRepository().buscarUno(identificador);

//   res.json(responseRepo);
// });

//GET /tareas/
router.get(
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
  buscarTareasController
);

//GET
router.get(
  "/:id",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarTareaIdController
);

//GET /tareas/estado/:estado
router.get(
  "/estado/:estado",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarTareasEstadoController
);

//GET /tareas/prioridad/:prioridad
router.get(
  "/prioridad/:prioridad",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarTareasPrioridadController
);

// POST caso de uso: crear tarea
router.post(
  "/crear/:id",
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
  "/:id",
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

// PUT caso de uso: asignar tarea
router.put(
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
  asignarPersonaTareaController
);

export default router;
