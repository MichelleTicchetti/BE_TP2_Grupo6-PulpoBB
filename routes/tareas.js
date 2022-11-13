import express from "express";
import { TareaRepository } from "../repositories/tarea_repository.js";
import {
  crearTareasController,
  eliminarTareasController,
  asignarPersonaTareaController,
  buscarTareasController,
  buscarTareasIdentificadorController,
} from "../controllers/tareas_controller.js";
const router = express.Router();

// //GET /tareas/
// router.get("/", async function (req, res, next) {
//   const responseRepo = await new TareaRepository().buscarTodos();
//   res.json(responseRepo);
// });

// // GET /tareas/:detalle
// router.get("/:detalle", async function (req, res, next) {
//   const { detalle } = req.params;

//   const responseRepo = await new TareaRepository().buscarUno(detalle);

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

//GET /tareas/:identificador
router.get(
  "/:identificador",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarTareasIdentificadorController
);

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
