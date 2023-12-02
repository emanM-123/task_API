
import { celebrate, Joi, Segments } from "celebrate";

export const getTaskById = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().hex().length(24).required(),
  },
});
