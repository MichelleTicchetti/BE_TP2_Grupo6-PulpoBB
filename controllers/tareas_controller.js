import { TareasUseCase } from "../use_cases/tareas.js";
import { PersonaRepository } from "../repositories/persona_repository.js";

export const buscarTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: listar tareas");
  try {
    const responseRepo = await new TareasUseCase().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarTareasIdentificadorController = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar tarea por identificador");

  const { identificador } = req.body;

  try {
    const responseObject = await new TareasUseCase().buscar(identificador);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: crear tarea");

  const { idTarea, detalle, prioridad, fechaCaducidad, pulpitoId, creador } =
    req.body;

  try {
    const responseObject = await new TareasUseCase().crear(
      idTarea,
      detalle,
      prioridad,
      fechaCaducidad,
      pulpitoId,
      creador
    );
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

export const asignarTareasController = async (req, res, next) => {
  console.log("ejecución caso de uso: asignar tarea");

  const { idTarea, idPersona } = req.body;

  try {
    const persona = await new PersonaRepository().buscarUno(idPersona);

    const responseObject = await new TareasUseCase().asignar(idTarea, persona);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

// //el identificador de la tarea y el id de persona lo tomo del req del body
// const { idPersona, identificador } = req.body;

// //primero necesito una persona
// const persona = await new PersonaRepository().buscarUno(idPersona);

// //le digo que me cree la tarea para la persona del id, con este identificador de la tarea
// const responseRepo = await new TareaUseCase(persona).assign(identificador);
// res.json(responseRepo);
