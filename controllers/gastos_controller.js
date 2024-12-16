import { GastosService } from "../services/gastos.js";

export const listarGastos = async (req, res, next) => {
  console.log("ejecución caso de uso: listar gastos");

  try {
    const responseRepo = await new GastosService().listar();
    res.status(200).json(responseRepo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const buscarGastoPorId = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar gasto por id ");

  const { id } = req.params;

  try {
    const responseObject = await new GastosService().buscar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const crearGasto = async (req, res, next) => {
  console.log("ejecución caso de uso: crear gasto");

  const { id, monto, detalle } = req.body;

  try {
    const responseObject = await new GastosService().crear(id, monto, detalle);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarGasto = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar gasto");

  const { id } = req.params;

  try {
    const responseObject = await new GastosService().eliminar(parseInt(id));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const eliminarGastos = async (req, res, next) => {
  console.log("ejecución caso de uso: borrar todos los gastos");

  try {
    const responseObject = await new GastosService().eliminarTodos();
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const saldarGasto = async (req, res, next) => {
  console.log("ejecución caso de uso: saldar gasto");

  const { idGasto } = req.query;

  try {
    const responseObject = await new GastosService().saldarGasto(parseInt(idGasto));
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
