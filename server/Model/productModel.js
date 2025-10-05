import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const ProjectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    imagePath: { type: String, required: true, default: "" },
    githubLink: { type: String, required: true },
    liveLink: { type: String, default: "" },
    description: { type: String, required: true },
    techs: [techSchema],
    isLive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const ProjectModal = mongoose.model("Project", ProjectSchema);
export default ProjectModal;
