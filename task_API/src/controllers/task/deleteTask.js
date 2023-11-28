import { StatusError } from "../../config/index.js";
import { Task } from "../../models/taskModel.js";
/**
 * deleteTask
 * @param req
 * @param res
 */
export const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id ? req.params.id : null;
    if (!taskId) throw StatusError.badRequest("Task Id is required");
    // Check if the Task with the given taskId exists
    const task = await Task.findById(taskId);
    if (!task) throw StatusError.badRequest("invalidId");

    // Update the task's status to "deleted"
    task.status = "deleted";
    task.updated_at = req.body.updated_at
      ? new Date(req.body.updated_at)
      : new Date();
    const updatedTask = await task.save();

    return res.ok({
      message: "Deleted successfully",
      deletedTask: updatedTask,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
