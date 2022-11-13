import express from "express";
import {
  crearPersonasController,
  eliminarPersonasController,
  buscarPersonasIdentificadorController,
  buscarPersonasController,
  buscarPersonasRolController,
} from "../controllers/personas_controller.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
const router = express.Router();

// //GET /personas/
// router.get("/", async function (req, res, next) {
//   const responseRepo = await new PersonaRepository().buscarTodos();
//   res.json(responseRepo);
// });

// // GET /personas/:id
// router.get("/:id", async function (req, res, next) {
//   const { id } = req.params;

//   const responseRepo = await new PersonaRepository().buscarUno(id);

//   res.json(responseRepo);
// });

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
  "/nombre/:identificador",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarPersonasIdentificadorController
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
  crearPersonasController
);

//DELETE caso de uso: eliminar una persona por id
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
  eliminarPersonasController
);

export default router;
