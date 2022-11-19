import express from "express";
import {
  crearTareasController,
  eliminarTareasController,
  asignarPersonaTareaController,
  buscarTareasController,
  buscarTareaIdController,
  buscarTareasEstadoController,
  finalizarTareaController,
  eliminarTodosTareasController,
  verificarTareaPendiente,
} from "../controllers/tareas_controller.js";
import { AutenticacionTarea } from "../controllers/autenticacion_controller.js";
import {
  verificarExistenciaTarea,
  verificarExistenciaPersona,
} from "../controllers/existencia_controller.js";
const router = express.Router();

/**
 * @openapi
 * /tareas:
 *   get:
 *     description: Devuelve todas las tareas
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
  buscarTareasController
);

/**
 * @openapi
 * /tareas/:id:
 *   get:
 *     description: Devuelve una tarea por id
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
  buscarTareaIdController
);

/**
 * @openapi
 * /tareas/estado/:estado:
 *   get:
 *     description: Devuelve tareas por estado "Pendiente" o "Finalizada"
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: OK
 *       204:
 *         description: No Content
 */
router.get(
  "/estado/:estado",
  (req, res, next) => {
    console.log("verificar auth");
    let valid = true;

    if (valid) {
      next();
    } else {
      res.status(401).send();
    }
  },
  buscarTareasEstadoController
);

/**
 * @openapi
 * /pulpos:
 *   post:
 *     description: Crea una tarea y se asocia a un pulpo
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
  //1er callback: verifico que el creador de la tarea sea un administrador? cod 401 es no autorizado
  AutenticacionTarea,
  //2do callback: crear la tarea
  crearTareasController
);

/**
 * @openapi
 * /tareas/:id:
 *   delete:
 *     description: Elimina una tarea por id
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
  eliminarTareasController
);

/**
 * @openapi
 * /tareas:
 *   delete:
 *     description: Elimina todas las tareas
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
  eliminarTodosTareasController
);

/**
 * @openapi
 * /tareas/:idTarea/:idPersona:
 *   put:
 *     description: Asigna una tarea a una persona
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idTarea:
 *                 type: integer
 *               idPersona:
 *                 type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
router.put(
  "/:idTarea/:idPersona",
  //1er callback: verifico que exista la tarea
  verificarExistenciaTarea,
  //1er callback: verifico que exista la persona
  verificarExistenciaPersona,
  //3er callback: verifico que la tarea se encuentre pendiente
  verificarTareaPendiente,
  //4to callback: asigno la tarea
  asignarPersonaTareaController
);

/**
 * @openapi
 * /tareas/:idTarea/:
 *   put:
 *     description: Finaliza una tarea
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idTarea:
 *                 type: integer
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not Found
 */
router.put(
  "/:idTarea",
  //1er callback: verifico que la tarea exista
  verificarExistenciaTarea,
  //2do callback: verifico la tarea esta pendiente
  verificarTareaPendiente,
  //2do callback: finalizo la tarea
  finalizarTareaController
);

export default router;
