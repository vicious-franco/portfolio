import express from "express";
import { login, userData } from "../controllers/Auth.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const AuthRoute = express.Router();
AuthRoute.post("/login", login);
AuthRoute.post("/user", authenticateUser, userData);
export default AuthRoute;
