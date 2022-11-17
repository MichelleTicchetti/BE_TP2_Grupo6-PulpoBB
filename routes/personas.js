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

/**
 * @openapi
 * /personas:
 *   get:
 *     description: Devuelve todas las personas
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 *
 */
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

/**
 * @openapi
 * /personas/:id:
 *   get:
 *     description: Busca una persona por id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: OK
 *       204:
 *         description: No Content
 */
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

/**
 * @openapi
 * /personas/:rol:
 *   get:
 *     description: lista las personas por rol "Administrador" o "Cuidador"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rol:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 *       204:
 *         description: No Content
 */
router.get(
  "/:rol",
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

/**
 * @openapi
 * /personas:
 *   post:
 *     description: Crea una persona y la asocia a un pulpo
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               nombreApellido:
 *                 type: string
 *               email:
 *                  type: string
 *               vinculo:
 *                  type: string
 *               rol:
 *                  type: string
 *               idPulpo:
 *                  type: integer
 *     responses:
 *       200:
 *         description: OK
 *       422:
 *         description: Unprocessable Entity
 */
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

/**
 * @openapi
 * /personas/:id:
 *   delete:
 *     description: Elimina una persona por id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       204:
 *         description: OK
 *       404:
 *         description: Not Found
 */
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

/**
 * @openapi
 * /personas:
 *   delete:
 *     description: Elimina todas las personas
 *     responses:
 *       204:
 *         description: OK
 *       404:
 *         description: Not Found
 */
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
  eliminarTodosPersonasController
);

export default router;
