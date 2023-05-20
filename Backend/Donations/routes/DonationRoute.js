import express from "express";
import DonationController from "../controllers/DonationController.js";

const router = express.Router();

router.route("/new").post(DonationController.createDonation);
router.route("/get/all").get(DonationController.getDonations);
router.route("/:id").get(DonationController.getDonationById);
router.route("/delete/:id").delete(DonationController.deleteDonationById);
router.route("/update/:id").put(DonationController.updateDonation);

export default router;
