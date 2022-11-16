import pkg from "http-errors";
const { createError } = pkg;

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

import morgan from "morgan";
const { logger } = morgan;

// const indexRouter = await (import('./routes/index.js'))
// const usersRouter = await (import('./routes/users.js'))

//1. un objeto, que es un callback, lo asociamos a una ruta
const personasRouter = await (await import("./routes/personas.js")).default;
const tareasRouter = await (await import("./routes/tareas.js")).default;
const pulposRouter = await (await import("./routes/pulpos.js")).default;
const gastosRouter = await (await import("./routes/gastos.js")).default;

const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PulpoBB",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//2.la ruta personas, va a estar asociada a personasRouter --> que es la asociacion de un callback a la raiz de las personas
app.use("/personas", personasRouter);
app.use("/tareas", tareasRouter);
app.use("/pulpos", pulposRouter);
app.use("/gastos", gastosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(4000);

export default app;
