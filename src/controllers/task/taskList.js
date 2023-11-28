import { Task } from "../../models/taskModel.js";

/**
 * taskList
 * @param req
 * @param res
 */
export const taskList = async (req, res, next) => {
  try {
    // Fetch all tasks
    const tasks = await Task.find(
      {},
      {
        id: 1,
        task_name: 1,
        due_date: 1,
        description: 1,
        status: 1,
        created_at: {
          $dateToString: { format: "%Y-%m-%d", date: "$created_at" },
        },
      }
    );

    return res.ok({
      data: tasks,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
