import { GastosUseCase } from "../use_cases/gastos.js";

export const buscarGastoIDController = async (req, res, next) => {
  console.log("ejecución caso de uso: buscar gasto por id ");

  const { identificador } = req.param;

  try {
    const responseObject = await new GastosUseCase().buscar(identificador);
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

  const id = req.body;

  try {
    const responseObject = await new GastosUseCase().eliminar(id);
    res.status(201).json(responseObject);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
