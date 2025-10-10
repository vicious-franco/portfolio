import ProjectModal from "../Model/productModel.js";
import fs from "fs/promises";

export const createProjects = async (req, res) => {
  const { projectName, description, techs, githubLink, isLive } = req.body;
  const imageFile = req.file;
  if (!projectName || !description || !techs || !githubLink) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const projects = await ProjectModal.create({
      projectName,
      githubLink,
      description,
      imageFile: req.file ? `/projectUploads/${req.file.filename}` : "",
      techs: JSON.parse(techs),
      isLive,
    });
    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      projects,
    });
  } catch (err) {
    console.log("error at create project: " + err.message);
    try {
      await fs.unlink(req.file?.path);
      console.log("deleted unused file: " + req.file?.path);
    } catch (error) {
      console.error(error);
    }
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

export const getProjects = async (req, res) => {
  const allProjects = await ProjectModal.find();
  if (!allProjects || allProjects < 1) {
    return res
      .status(404)
      .json({ success: false, message: "No projects found" });
  }
  res.status(200).json({ success: true, projects: allProjects });
};
