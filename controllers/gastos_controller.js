import { GastosUseCase } from "../use_cases/gastos.js";

export const buscarGastosController = async (req, res, next) => {
  console.log("ejecución caso de uso: listar gastos");

  try {
    const responseRepo = await new GastosUseCase().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarGastoIDController = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar gasto por id ");

  const { id } = req.params;

  try {
    const responseObject = await new GastosUseCase().buscar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearGastosController = async (req, res, next) => {
  console.log("ejecución caso de uso: crear gasto");

  const { id, monto, detalle } = req.body;

  try {
    const responseObject = await new GastosUseCase().crear(id, monto, detalle);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarGastosController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar gasto");

  const { id } = req.body;

  try {
    const responseObject = await new GastosUseCase().eliminar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarTodosGastosController = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todos los gastos");

  try {
    const responseObject = await new GastosUseCase().eliminarTodos();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const saldarGastosController = async (req, res, next) => {
  console.log("ejecución caso de uso: saldar gasto");

  const { idGasto } = req.body;

  try {
    const responseObject = await new GastosUseCase().saldarGasto(idGasto);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
