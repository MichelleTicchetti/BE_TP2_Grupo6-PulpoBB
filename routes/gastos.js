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

/**
 * @openapi
 * /gastos:
 *   get:
 *     description: Devuelve todos los gastos
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
  buscarGastosController
);

/**
 * @openapi
 * /gastos/:id:
 *   get:
 *     description: Devuelve un gasto por id
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
  buscarGastoIDController
);

/**
 * @openapi
 * /gastos:
 *   post:
 *     description: Crea un gasto
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               monto:
 *                 type: float
 *               detalle:
 *                  type: string
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
  crearGastosController
);

/**
 * @openapi
 * /gastos/:id:
 *   delete:
 *     description: Elimina un gasto por id
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
  eliminarGastosController
);

/**
 * @openapi
 * /gastos/all:
 *   delete:
 *     description: Elimina todos los gastos
 *     responses:
 *       204:
 *         description: OK
 *       404:
 *         description: Not Found
 */
router.delete(
  "/all",
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
