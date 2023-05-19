import express from "express";
import ProjectController from "../controllers/ProjectController.js";

const router = express.Router();

router.route("/new").post(ProjectController.createProject);
router.route("/get/all").get(ProjectController.getProjects);
router.route("/:id").get(ProjectController.getProjectById);
router.route("/delete/:id").delete(ProjectController.deleteProjectById);
router.route("/update/:id").put(ProjectController.updateProject);

export default router;
