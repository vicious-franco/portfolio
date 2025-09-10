import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const ProjectSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    imagePath: { type: String, required: true, default: "" },
    description: { type: String },
    techs: [techSchema],
  },
  { timestamps: true }
);

const ProjectModal = mongoose.model("Project", ProjectSchema);
export default ProjectModal;
