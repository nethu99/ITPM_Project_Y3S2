import ProjectModel from "../models/ProjectModel.js";

async function createProject(project) {
  try {
    const newProject = new ProjectModel(project);
    return await newProject.save();
  } catch (error) {
    throw new Error("Error while adding the project: " + error);
  }
}

async function getProjects() {
  try {
    return await ProjectModel.find();
  } catch (error) {
    throw new Error("Error while getting projects: " + error);
  }
}

async function getProjectById(id) {
  try {
    return await ProjectModel.findById(id);
  } catch (error) {
    throw new Error("Error while getting project by id: " + error);
  }
}

async function updateProject(id, project) {
  try {
    return await ProjectModel.findOneAndUpdate({ _id: id }, project);
  } catch (error) {
    throw new Error("Error while updating project by id: " + error);
  }
}

async function deleteProjectById(id) {
  try {
    return await ProjectModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error while deleting project by id: " + error);
  }
}

export default {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProjectById,
};
