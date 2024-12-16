import { TareasService } from "../services/tareas.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import { TareaRepository } from "../repositories/tarea_repository.js";

export const listarTareas = async (req, res, next) => {
  console.log("ejecución caso de uso: listar tareas");
  try {
    const responseRepo = await new TareasService().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarTareaPorId = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar tarea por id");

  const { id } = req.params;

  try {
    const responseObject = await new TareasService().buscar(parseInt(id));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarTareasPorEstado = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar tarea por estado");

  const { estado } = req.params;

  try {
    const responseObject = await new TareasService().listarPorEstado(estado);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearTarea = async (req, res, next) => {
  console.log("ejecución caso de uso: crear tarea");

  const { idTarea, detalle, fechaCaducidad, pulpitoId, idCreador } = req.body;

  try {
    const responseObject = await new TareasService().crear(
      idTarea,
      detalle,
      fechaCaducidad,
      pulpitoId,
      idCreador
    );

    res.status(201).json(responseObject);
  } catch (e) {
    res.status(422).json({ message: e.message });
  }
};

export const eliminarTarea = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar tarea");

  const { id } = req.params;

  try {
    const responseObject = await new TareasService().eliminar(parseInt(id));
    res.status(204).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarTareas = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todas las tareas");

  try {
    const responseObject = await new TareasService().eliminarTodos();
    res.status(204).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const asignarPersonaATarea = async (req, res, next) => {
  console.log("ejecución caso de uso: asignar tarea a persona");

  const { idTarea, idPersona } = req.params;

  try {
    const persona = await new PersonaRepository().buscarUno(parseInt(idPersona));

    const responseTarea = await new TareasService().asignarPersona(
      parseInt(idTarea),
      persona
    );
    res.status(201).json(responseTarea);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const finalizarTarea = async (req, res, next) => {
  console.log("ejecución caso de uso: finalizar una tarea");

  const { idTarea } = req.body;

  try {
    const responseObject = await new TareasService().finalizarTarea(idTarea);
    res.status(204).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const verificarTareaPendiente = async (req, res, next) => {
  console.log("verificar si tarea se encuentra pendiente");

  const { idTarea } = req.params

  const tarea = await new TareaRepository().buscarUno(parseInt(idTarea));

  if (tarea[0].estado === "Pendiente") {
    console.log("Tarea se encuentra en estado pendiente");
    next();
  } else {
    console.log("Tarea ya se encuentra en estado finalizado");
    res.status(204).send();
  }
};

export const verificarTareaFinalizada = async (req, res, next) => {
  console.log("verificar si tarea se encuentra finalizada");

  const { id } = req.params
  const tarea = await new TareaRepository().buscarUno(parseInt(id));

  if (tarea[0].estado === "Finalizada") {
    console.log("Tarea se encuentra en estado finalizada");
    next();
  } else {
    console.log("Tarea aún se encuentra pendiente");
    res.status(204).send();
  }
};
