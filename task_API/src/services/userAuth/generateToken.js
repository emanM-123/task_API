import jwt from "jsonwebtoken";
import { envs } from "../../config/index.js";

/**
 * Generate access token
 * @param details
 */
export const generateToken = async (params) => {
  const accessToken = jwt.sign(params, envs.jwt.accessToken.secret, {
    expiresIn: envs.jwt.accessToken.expiry,
  });
  return {
    access_token: accessToken,
    access_token_expiry: envs.jwt.accessToken.expiry,
  };
};
