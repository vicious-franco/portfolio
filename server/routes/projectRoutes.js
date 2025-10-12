import {
  getProjects,
  createProjects,
  deleteProject,
  updateProject,
  singleProject,
} from "../controllers/ProjectController.js";
import express from "express";
import uploads from "../middleware/multer.js";

const ProjectRouter = express.Router();

ProjectRouter.post("/upload", uploads.single("image"), createProjects);
ProjectRouter.get("/all-projects", getProjects);
ProjectRouter.delete("/remove/:id", deleteProject);
ProjectRouter.get("/:projectId", singleProject);
ProjectRouter.patch("/update/:id", uploads.single("image"), updateProject);

export default ProjectRouter;
