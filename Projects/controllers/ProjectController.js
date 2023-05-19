import ProjectService from "../services/ProjectService.js";
import ProjectValidation from "../services/Validation.js";

const createProject = async (req, res) => {
  try {
    const project = new ProjectValidation(req);

    // Validate the request body
    await project.validate();

    const newProject = await ProjectService.createProject(project);

    res.status(200).json({
      status: "success",
      message: "Project added successfully!",
      data: newProject,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectService.getProjects();

    res.status(200).json({
      status: "success",
      message: "Projects fetched successfully!",
      data: projects,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await ProjectService.getProjectById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Project fetched successfully!",
      data: project,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const project = new ProjectValidation(req);
    const updatedProject = await ProjectService.updateProject(
      req.params.id,
      project
    );

    res.status(200).json({
      status: "success",
      message: "Project updated successfully!",
      data: updatedProject,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteProjectById = async (req, res) => {
  try {
    await ProjectService.deleteProjectById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Project deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export default {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProjectById,
};
