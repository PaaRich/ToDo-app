const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: [50, "Task must have a length of at most 10"],
      minLength: [2, "Task must have a length of at least 2"],
      required: true,
      unique: true,
    },
    validity: {
      type: Boolean,
      require: true,
    },
    category: {
      type: String,
      enum: {
        values: ["Entertainment", "Education", "Travel", "health"],
        message:
          "Your task must fall in following category Entertainment, Education, Travel",
      },
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    runValidators: true,
  },
  { Timestamp: true }
);
const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;
