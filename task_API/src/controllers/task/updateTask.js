import { StatusError } from "../../config/index.js";
import { Task } from "../../models/taskModel.js"; 

/**
 * Update task
 * @param req
 * @param res
 * @param next
 */
export const updateTask = async (req, res, next) => {
  try {
    const reqBody = req.body;
    const taskId = reqBody.task_id ? reqBody.task_id : "";

    if (!taskId) {
      throw StatusError.badRequest(res.__("Task Id is required"));
    }

    // Update the task by ID
    const updatedtask = await Task.findByIdAndUpdate(taskId, {
      task_name: reqBody.task_name || "",
      description: reqBody.description || "",
      due_date: reqBody.due_date || "",
      status: "active",
      updated_at: reqBody.updated_at || new Date(),
    }, { new: true });

    if (!updatedtask) {
      throw StatusError.badRequest(res.__("invalidId"));
    }

    return res.ok({
      message: res.__("Updated successfully"),
      data: updatedtask,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
