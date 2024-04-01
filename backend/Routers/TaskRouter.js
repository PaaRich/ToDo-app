const express = require("express");
const {
  allTask,
  postTask,
  deleteTask,
} = require("../Controllers/taskControllers");
const router = express.Router();

router.route("/").get(allTask).post(postTask);
router.route("/:id").get().delete(deleteTask);
module.exports = router;
