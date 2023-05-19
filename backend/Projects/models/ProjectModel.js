import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  organizationName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  projectCost: {
    type: Number,
    required: true,
  },
  memberCount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ProjectModel = mongoose.model("Projects", ProjectSchema);

export default ProjectModel;
