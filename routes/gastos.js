import express from "express";
import {
  crearGastosController,
  eliminarGastosController,
} from "../controllers/gastos_controller.js";
import { GastoRepository } from "../repositories/gasto_repository.js";
const router = express.Router();

//GET /gastos/
router.get("/", async function (req, res, next) {
  const responseRepo = await new GastoRepository().buscarTodos();
  res.json(responseRepo);
});

// GET /gastos/:id
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  const responseRepo = await new GastoRepository().buscarUno(id);

  res.json(responseRepo);
});

// POST caso de uso: agregar un gasto
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
  crearGastosController
);

//DELETE caso de uso: eliminar un gasto por id
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
  eliminarGastosController
);

export default router;
