import express from "express";
import {
  crearPersonasController,
  eliminarPersonasController,
  buscarPersonaIDController,
  buscarPersonasController,
  buscarPersonasRolController,
  eliminarTodosPersonasController,
} from "../controllers/personas_controller.js";
const router = express.Router();

//GET /personas/
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
  buscarPersonasController
);

//GET /personas/:identificador
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
  buscarPersonaIDController
);

//GET /personas/:rol
router.get(
  "/rol/:rol",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarPersonasRolController
);

// POST caso de uso: agregar una persona
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
  crearPersonasController
);

//DELETE caso de uso: eliminar una persona por id
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
  eliminarPersonasController
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
  eliminarTodosPersonasController
);

export default router;
