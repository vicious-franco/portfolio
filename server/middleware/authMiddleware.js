import jwt from "jsonwebtoken";
import AdminModel from "../Model/AdminAuth.js";

export const authenticateUser = async (req, res, next) => {
  const { login_token } = req.cookies;
  if (!login_token) {
    return res
      .status(401)
      .json({ success: false, message: "No token, plase login again" });
  }
  try {
    const { id } = jwt.verify(login_token, process.env.SECRET_KEY);
    if (id) {
      req.userId = id;
    }
    next();
  } catch (error) {
    console.error("error from authenticateUser middleware: " + error);
  }
};
