const router = require("express").Router();
const {
  createTask,
  updateTask,
  getAllTasks,
  deleteTask,
} = require("../controllers/taskController");

router.post("/create", createTask);
router.put("/update", updateTask);
router.get("allTasks", getAllTasks);
router.delete("/delete", deleteTask);

module.exports = router;
