import express from "express";
import {
  buscarPulposController,
  buscarPulpoIdController,
  crearPulpoBbsController,
  eliminarPulpoBbsController,
} from "../controllers/pulposBB_controller.js";
const router = express.Router();

//GET /pulpos/
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
  buscarPulposController
);

// GET /pulpos/nombre/:nombre
router.get(
  "/nombre/:nombre",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarPulpoIdController
);

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
