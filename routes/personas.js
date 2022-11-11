import express from "express";
import { PersonaFactory } from "../factories/persona_factory.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
const router = express.Router();

//GET /personas/
router.get("/", async function (req, res, next) {
  const responseRepo = await new PersonaRepository().buscarTodos();
  res.json(responseRepo);
});

// GET /personas/:id
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  const responseRepo = await new PersonaRepository().buscarUno(id);

  res.json(responseRepo);
});

// GET /personas/:id
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  const responseRepo = await new PersonaRepository().buscarUno(id);

  res.json(responseRepo);
});

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
  async (req, res, next) => {
    console.log("caso de uso");

    //tomo los datos para crear el objeto del body del request
    const { id, nombreApellido, email, vinculo, rol } = req.body;

    //creamos el objeto con el factory
    const persona = new PersonaFactory().crear(
      id,
      nombreApellido,
      email,
      vinculo,
      rol
    );

    console.log(persona);

    //lo persistimos en la bd
    const responseRepo = new PersonaRepository();
    await responseRepo.guardar(persona);

    //lo devolvemos como objeto json
    res.status(201).json({});
  }
);

// router.post(
//   "/",
//   (req, res, next) => {
//     console.log("verificar autenticidad");
//     //autenticacion
//     let valid = true;
//     if (valid) {
//       next();
//     } else {
//       //codigo de no autorizado
//       res.status(401).send();
//     }
//   },
//   (req, res, next) => {
//     console.log("ejecución de caso de uso");
//     //recurso creado para post
//     res.status(201).json({});
//   }
// );

export default router;
