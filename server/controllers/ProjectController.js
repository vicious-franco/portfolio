import ProjectModal from "../Model/model.js";

export const createProjects = async (req, res) => {
  const { projectName, description, imagePath, techs } = req.body;
  if (!projectName || !description || !techs) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const projects = await ProjectModal.create({
      projectName,
      description,
      imagePath: req.file ? `/uploads/${req.file.filename}` : "",
      techs: JSON.parse(techs),
    });
    return res.status(201).json({
      success: true,
      message: "Project created successfully",
      projects,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

export const getProjects = async (req, res) => {
  const allProjects = await ProjectModal.find({});
  if (!allProjects || allProjects < 1) {
    return res
      .status(404)
      .json({ success: false, message: "No projects found" });
  }
  res.status(200).json({ success: true, projects: allProjects });
};
