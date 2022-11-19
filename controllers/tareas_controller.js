import { TareasUseCase } from "../use_cases/tareas.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import { TareaRepository } from "../repositories/tarea_repository.js";
import { PersonasUseCase } from "../use_cases/personas.js";
import { PulpoBbsUseCase } from "../use_cases/pulpos.js";

export const buscarTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: listar tareas");
  try {
    const responseRepo = await new TareasUseCase().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarTareaIdController = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar tarea por id");

  const { id } = req.params;

  try {
    const responseObject = await new TareasUseCase().buscar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarTareasEstadoController = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar tarea por estado");

  const { estado } = req.params;

  try {
    const responseObject = await new TareasUseCase().listarPorEstado(estado);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: crear tarea");

  const { idTarea, detalle, fechaCaducidad, pulpitoId, creador } = req.body;

  try {
    const responseObject = await new TareasUseCase().crear(
      idTarea,
      detalle,
      fechaCaducidad,
      pulpitoId,
      creador
    );

    res.status(201).json(responseObject);
  } catch (e) {
    res.status(422).json({ message: e.message });
  }
};

export const eliminarTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar tarea");

  const { idTarea } = req.body;

  try {
    const responseObject = await new TareasUseCase().eliminar(idTarea);
    res.status(204).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarTodosTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todas las tareas");

  try {
    const responseObject = await new TareasUseCase().eliminarTodos();
    res.status(204).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const asignarPersonaTareaController = async (req, res, next) => {
  console.log("ejecución caso de uso: asignar tarea a persona");

  const { idTarea, idPersona } = req.body;

  try {
    const persona = await new PersonaRepository().buscarUno(idPersona);

    const responseTarea = await new TareasUseCase().asignarPersona(
      idTarea,
      persona
    );
    res.status(201).json(responseTarea);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const finalizarTareaController = async (req, res, next) => {
  console.log("ejecución caso de uso: finalizar una tarea");

  const { idTarea } = req.body;

  try {
    const responseObject = await new TareasUseCase().finalizarTarea(idTarea);
    res.status(204).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const verificarTareaPendiente = async (req, res, next) => {
  console.log("verificar si tarea se encuentra pendiente");

  const tarea = await new TareaRepository().buscarUno(req.body.idTarea);

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

  const tarea = await new TareaRepository().buscarUno(req.body.idTarea);

  if (tarea[0].estado === "Finalizada") {
    console.log("Tarea se encuentra en estado finalizada");
    next();
  } else {
    console.log("Tarea aún se encuentra pendiente");
    res.status(204).send();
  }
};
