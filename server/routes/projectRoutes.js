import {
  getProjects,
  createProjects,
} from "../controllers/ProjectController.js";
import express from "express";
import uploads from "../middleware/multer.js";

const ProjectRouter = express.Router();

ProjectRouter.post("/projects", uploads.single("image"), createProjects);
ProjectRouter.get("/projects", getProjects);

export default ProjectRouter;
