import express from "express";
import { login, logout, test, userData } from "../controllers/Auth.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const AuthRoute = express.Router();
AuthRoute.post("/login", login);
AuthRoute.get("/user", authenticateUser, userData);
AuthRoute.post("/logout", logout);

export default AuthRoute;
