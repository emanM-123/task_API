import { Router } from "express";
import { taskController } from "../../controllers/index.js";
import { validateAccessToken } from "../../middleware/accessToken.js";
import { taskValidation } from "../../validations/index.js";



const v1taskRouter = Router();

v1taskRouter.post(
  "/add",
  validateAccessToken,
  taskValidation.addTask,
  taskController.addTask
);

v1taskRouter.post(
  "/update",
  validateAccessToken,
  taskValidation.updateTask,
  taskController.updateTask
);

v1taskRouter.get(
  "/",
  validateAccessToken,
  taskController.taskList
);

v1taskRouter.get(
  "/:id",
  validateAccessToken,
  taskValidation.getTaskById,
  taskController.getTaskById
);

v1taskRouter.post(
  "/delete/:id",
  validateAccessToken,
  taskValidation.deleteTask,
  taskController.deleteTask
);

export { v1taskRouter };
