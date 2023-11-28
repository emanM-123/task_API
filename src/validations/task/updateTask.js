import { celebrate, Joi } from "celebrate";
export const updateTask = celebrate({
  body: Joi.object({
    task_id: Joi.string().hex().length(24).required(),
    task_name: Joi.string(),
    description: Joi.string(),
    due_date: Joi.string(),
  }),
});
