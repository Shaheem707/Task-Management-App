const joi = require("joi");
const taskModel = require("./userController");

const createTaskSchema = joi.object().keys({
    taskDescription : joi.string().required(),
})

module.exports = {
    createTask : async (req, res) => {
        try {
            const validatedTask = await createTaskSchema.validateAsync(req.body);
            const Task = await createTask(validatedTask)
            if(Task.error){
                return res.send({
                    error : Task.error,
                })
            }
            return res.send({
                response : Task.response
            })
        } catch (error) {
            return res.send({
                error : {
                    error : error.message,
                    fileName : "taskController"
                }
            })
        }
    },
    updateTask : async (req, res) => {

    },
    getAllTasks : async (req, res) => {

    },
    deleteTask : async (req, res) => {

    },
}