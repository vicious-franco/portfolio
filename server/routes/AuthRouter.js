import express from "express";
import { login } from "../controllers/Auth.js";

const AuthRoute = express.Router();
AuthRoute.post("/login", login);
export default AuthRoute;
