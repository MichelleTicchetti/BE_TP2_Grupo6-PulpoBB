import express from "express";
import * as TareasController from "../controllers/tareas_controller.js"
import { autenticacionTarea } from "../controllers/autenticacion_controller.js";
import {
  verificarExistenciaTarea,
  verificarExistenciaPersona,
  verificarTareaYaExiste,
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
  TareasController.listarTareas
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
  TareasController.buscarTareaPorId
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
  TareasController.buscarTareasPorEstado
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
 *       401:
 *         description: Not Authorized
 *       422:
 *         description: Unprocessable Entity
 */
router.post(
  "/",
  //1er callback: verifico que no exista una tarea con el mismo id
  verificarTareaYaExiste,
  //2do callback: verifico que el creador de la tarea sea un administrador
  autenticacionTarea,
  //3er callback: crear la tarea
  TareasController.crearTarea
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
 *               idTarea:
 *                 type: integer
 *     responses:
 *       204:
 *         description: OK
 *       404:
 *         description: Not Found
 */
router.delete(
  "/:idTarea",
  //1er callback: verifico que exista la tarea
  verificarExistenciaTarea,
  //2do callback: verifico que la tarea ya este finalizada
  TareasController.verificarTareaFinalizada,
  //3er callback: elimino la tarea
  TareasController.eliminarTarea
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
  TareasController.eliminarTareas
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
  TareasController.verificarTareaPendiente,
  //4to callback: asigno la tarea
  TareasController.asignarPersonaATarea
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
  TareasController.verificarTareaPendiente,
  //2do callback: finalizo la tarea
  TareasController.finalizarTarea
);

export default router;
