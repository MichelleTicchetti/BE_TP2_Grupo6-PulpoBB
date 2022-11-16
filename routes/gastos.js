import express from "express";
import {
  crearGastosController,
  eliminarGastosController,
  buscarGastoIDController,
  buscarGastosController,
  eliminarTodosGastosController,
} from "../controllers/gastos_controller.js";
import { GastoRepository } from "../repositories/gasto_repository.js";
const router = express.Router();

//GET /gastos/
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
  buscarGastosController
);

// GET /gastos/:id
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
  buscarGastoIDController
);

// POST caso de uso: agregar un gasto
router.post(
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
  crearGastosController
);

//DELETE caso de uso: eliminar un gasto por id
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
  eliminarGastosController
);

router.delete(
  "/delete/all",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  eliminarTodosGastosController
);

export default router;
