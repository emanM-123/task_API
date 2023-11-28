import { StatusError } from "../../config/index.js";
import { Task } from "../../models/taskModel.js"; 

/**
 * Get a task by ID
 * @param req
 * @param res
 */
export const getTaskById = async (req, res, next) => {
  try {
    const taskId = req.params.id; 

    // Use Mongoose to find the task by ID
    const task = await Task.findById(taskId);

    if (!task) {
      throw StatusError.notFound("Task not found"); 
    }
    return res.ok({ data: task });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
