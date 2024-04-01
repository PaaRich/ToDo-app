const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const TaskRouter = require("./Routers/TaskRouter");
const CustomErrorHandler = require("./Utils/CustomErrorHandler");
const errorController = require("./Controllers/errorController");

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/task", TaskRouter);
app.all("*", (req, res, next) => {
  const err = new CustomErrorHandler(`The Url ${req.url} is invalid`, 404);
  next(err);
});
app.use(errorController);

module.exports = app;
