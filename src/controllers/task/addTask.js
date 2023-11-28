import { StatusError } from "../../config/index.js";
import { Task } from "../../models/taskModel.js"; 

/**
 * addTask
 * @param req
 * @param res
 */
export const addTask = async (req, res, next) => {
  try {
    let reqBody = req.body;

    const taskData = {
      task_name: reqBody.task_name ? reqBody.task_name : "",
      description: reqBody.description ? reqBody.description : "",
      due_date: reqBody.due_date ? reqBody.due_date : "",
      status: "active",
      created_at: reqBody.created_at ? new Date(reqBody.created_at) : new Date(),
    };

    const task = new Task(taskData);

    const savedTask = await task.save();

    if (savedTask) {
      return res.ok({
        message: res.__("createdSuccessfully"),
        Data: savedTask,
      });
    } else {
      throw StatusError.serverError(res.__("serverError"));
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
