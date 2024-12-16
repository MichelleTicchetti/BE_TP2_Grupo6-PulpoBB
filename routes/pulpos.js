import express from "express";
import * as PulposController from "../controllers/pulposBB_controller.js";
const router = express.Router();

/**
 * @openapi
 * /pulpos:
 *   get:
 *     description: Devuelve todos los pulpos
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
  PulposController.listarPulpos
);

/**
 * @openapi
 * /pulpos/:nombre:
 *   get:
 *     description: Busca un pulpo por nombre
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
  PulposController.buscarPulpoPorId
);

/**
 * @openapi
 * /pulpos:
 *   post:
 *     description: Crea un pulpo
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               fechaNac:
 *                 type: string
 *               nombre:
 *                  type: string
 *               peso:
 *                  type: string
 *               carnetObraSocial:
 *                  type: string
 *               estatura:
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
  PulposController.crearPulpoBb
);

/**
 * @openapi
 * /pulpos/:nombre:
 *   delete:
 *     description: Elimina un pulpo por nombre
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
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
  PulposController.eliminarPulpoBb
);

/**
 * @openapi
 * /pulpos:
 *   delete:
 *     description: Elimina todos los pulpos
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
  PulposController.eliminarPulpos
);

export default router;
