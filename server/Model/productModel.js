import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    imageFile: { type: String, required: true },
    githubLink: { type: String, required: true },
    liveLink: { type: String, default: "" },
    description: { type: String, required: true },
    techs: { type: [String], required: true },
    isLive: { type: Boolean },
  },
  { timestamps: true }
);

const ProjectModal = mongoose.model("Project", ProjectSchema);
export default ProjectModal;
