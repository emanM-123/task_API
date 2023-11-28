import { Router } from "express";
import { v1taskRouter } from "./task.js";
import { v1authRouter } from "./auth.js";

const taskRouter = Router();

taskRouter.use("/task", v1taskRouter);
taskRouter.use("/", v1authRouter);


export { taskRouter };
