import express from "express";
import { PersonaRepository } from "../repositories/persona_repository.js";
const router = express.Router();

/* GET users listing. */
//la raiz es GET /corredores/
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

export default router;
