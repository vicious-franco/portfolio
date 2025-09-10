import {
  getProjects,
  createProjects,
} from "../controllers/ProjectController.js";
import express from "express";
import uploads from "../middleware/multer.js";

const Router = express.Router();

Router.post("/projects", uploads.single("image"), createProjects);
Router.get("/projects", getProjects);

export default Router;
