import { TareasUseCase } from "../use_cases/tarea.js";

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
