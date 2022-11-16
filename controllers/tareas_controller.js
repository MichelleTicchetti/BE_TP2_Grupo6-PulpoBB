import { TareasUseCase } from "../use_cases/tareas.js";
import { PersonaRepository } from "../repositories/persona_repository.js";
import { PersonasUseCase } from "../use_cases/personas.js";
import { TareaRepository } from "../repositories/tarea_repository.js";
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

    await new PulpoBbsUseCase().asignarTarea(pulpitoId, idTarea);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar tarea");

  const { id } = req.body;

  try {
    const responseObject = await new TareasUseCase().eliminar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarTodosTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todas las tareas");

  try {
    const responseObject = await new TareasUseCase().eliminarTodos();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const asignarPersonaTareaController = async (req, res, next) => {
  console.log("ejecución caso de uso: asignar tarea a persona");

  const { idTarea, idPersona } = req.body;

  try {
    const persona = await new PersonaRepository().buscarUno(idPersona);
    const tarea = await new TareaRepository().buscarUno(idTarea);

    const responseTarea = await new TareasUseCase().asignarPersona(
      idTarea,
      persona
    );

    await new PersonasUseCase().asignarTarea(idPersona, tarea);

    res.status(201).json(responseTarea);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const finalizarTareaController = async (req, res, next) => {
  console.log("ejecución caso de uso: finalizar una tarea");

  const { id } = req.body;

  try {
    const responseObject = await new TareasUseCase().finalizarTarea(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
