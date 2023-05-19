import express from "express";
import InquiryController from "../controllers/InquiryController.js";

const router = express.Router();

router.route("/new").post(InquiryController.createInquiry);
router.route("/get/all").get(InquiryController.getInquiries);
router.route("/:id").get(InquiryController.getInquiryById);
router.route("/delete/:id").delete(InquiryController.deleteInquiryById);
router.route("/update/:id").put(InquiryController.updateInquiry);

export default router;
