const taskModel = require("../models/task");

module.exports = {
  createTask: async (body) => {
    try {
      const Task = await createTask(body);

      if (Task.error) {
        return {
          error: Task.error,
        };
      }
      return {
        response: Task.response,
      };
    } catch (error) {
      return {
        error: {
          error: error.message,
          fileName: "taskService",
        },
      };
    }
  },
};
