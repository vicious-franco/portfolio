import ProjectModal from "../Model/productModel.js";
import fs from "fs/promises";

// creating project controller

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
// getting projects controller
export const getProjects = async (req, res) => {
  const allProjects = await ProjectModal.find();
  if (!allProjects || allProjects < 1) {
    return res
      .status(404)
      .json({ success: false, message: "No projects found" });
  }
  res.status(200).json({ success: true, projects: allProjects });
};

// deleting project controller
export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const existingProject = await ProjectModal.findByIdAndDelete({
        _id: id,
      });
      console.log(existingProject);
      if (!existingProject) {
        await fs.unlink(req.file?.path);
        console.log("project image file deleted : " + req.file?.path);
        return res
          .status(404)
          .json({ success: false, message: "project not found" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Project deleted successfully" });
    }
  } catch (err) {
    console.error(err.message);
  }
};

// updating project controller

export const updateProject = async (req, res) => {
  const { id } = req.params;

  try {
    if (req.body) {
      if (id) {
        const updateProject = await ProjectModal.findByIdAndUpdate(
          id,
          req.body,
          {
            runValidators: true,
            new: true,
          }
        );
        console.log(updateProject);
        if (!updateProject) {
          return res.status(404).json({
            success: false,
            message: "project not found.",
          });
        }
        return res
          .status(200)
          .json({ success: true, message: "project updated successfully" });
      }
    } else {
      return res
        .status(400)
        .json({ success: false, message: "request can't be empty" });
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const singleProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    if (projectId) {
      const matchProject = await ProjectModal.findOne({ _id: projectId });
      if (!matchProject) {
        return res
          .status(404)
          .json({ success: false, message: "project does not exist" });
      }
      return res.status(200).json({ success: true, project: matchProject });
    } else {
      return res.status(404).json({ success: false, message: "invalid id" });
    }
  } catch (err) {
    console.error(err.message);
  }
};
