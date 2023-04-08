import express from "express";
import multer from "multer";
import donationsController from "../controllers/donations.controller.js";

const router = express.Router();

// Set up multer storage for image upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.route("/new").post(upload.array("images"), donationsController.createDonations);
router.route("/get/all").get(donationsController.getDonations);
router.route("/user/get").get(donationsController.getDonationsByUserId);
router.route("/get/one/:id").get(donationsController.getDonationsById);
router.route("/search").get(donationsController.searchDonationsByTerm);
router.route("/delete/:id").delete(donationsController.deleteDonationsById);
router
  .route("/update/:id")
  .put(upload.array("images"), donationsController.updateItemById);

export default router;
