import { celebrate, Joi } from "celebrate";
export const addTask = celebrate({
  body: Joi.object({
    task_name: Joi.string().required(),
    description: Joi.string().required(),
    due_date: Joi.string().required(),
  }),
});
