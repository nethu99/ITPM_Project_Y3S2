import express from "express";
import SupplierController from "../controllers/SupplierController.js";

const router = express.Router();

router.route("/new").post(SupplierController.createSupplier);
router.route("/get/all").get(SupplierController.getSuppliers);
router.route("/:id").get(SupplierController.getSupplierById);
router.route("/delete/:id").delete(SupplierController.deleteSupplierById);
router.route("/update/:id").put(SupplierController.updateSupplier);

export default router;
