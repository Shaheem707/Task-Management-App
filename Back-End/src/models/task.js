const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    taskTitle: {
      type: String,
    },
    taskDescription: {
      type: String,
      required: true,
    },
    taskStatus: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
