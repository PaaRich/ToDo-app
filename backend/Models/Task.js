const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
});

export default mongoose.model({ task, TaskSchema });
