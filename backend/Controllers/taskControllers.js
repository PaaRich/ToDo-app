const TaskModel = require("../Models/TaskModel");
const asyncErrorHandler = require("../Utils/asyncErrorHandler");

//Responding all task
const allTask = asyncErrorHandler(async (req, res) => {
  let queryString = { ...req.query };
  //FILTERING
  const excludedField = ["sort", "limit", "field"];
  excludedField.forEach((e) => delete queryString[e]);
  let queryStringStr = JSON.stringify(queryString);
  const queryStringStrObj = JSON.stringify(
    queryStringStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
  );
  //SORTING

  //LIMITING
  let query = await TaskModel.find(queryStringStrObj);
  res
    .status(200)
    .json({ status: "success", length: query.length, data: query });
});

const postTask = asyncErrorHandler(async (req, res) => {
  const data = req.body;
  await TaskModel.create(data);
  res.status(200).json({ status: "success" });
});

const deleteTask = asyncErrorHandler(async (req, res) => {
  const { id } = req.params;
  await TaskModel.findByIdAndDelete(id);
  res.status(200).json({ status: "success" });
});

module.exports = { allTask, postTask, deleteTask };
