import express from "express";
import { PulpoBbRepository } from "../repositories/pulpobb_repository.js";
import {
  crearPulpoBbsController,
  eliminarPulpoBbsController,
} from "../controllers/pulposBB_controller.js";
const router = express.Router();

//GET /pulpos/
router.get("/", async function (req, res, next) {
  const responseRepo = await new PulpoBbRepository().buscarTodos();
  res.json(responseRepo);
});

// GET /pulpos/:id
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  const responseRepo = await new PulpoBbRepository().buscarUno(id);

  res.json(responseRepo);
});

// POST caso de uso: agregar un pulpoBb
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
  crearPulpoBbsController
);

//DELETE caso de uso: eliminar un pulpoBB por id
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
  eliminarPulpoBbsController
);

export default router;
