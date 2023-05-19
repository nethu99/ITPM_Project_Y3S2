import InquiryService from "../services/InquiryService.js";
import InquiryValidation from "../services/Validation.js";

const createInquiry = async (req, res) => {
  try {
    const inquiry = new InquiryValidation(req);

    // Validate the request body
    await inquiry.validate();

    const newInquiry = await InquiryService.createInquiry(inquiry);

    res.status(200).json({
      status: "success",
      message: "Inquiry added successfully!",
      data: newInquiry,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getInquiries = async (req, res) => {
  try {
    const Inquiries = await InquiryService.getInquiries();

    res.status(200).json({
      status: "success",
      message: "Inquiries fetched successfully!",
      data: Inquiries,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getInquiryById = async (req, res) => {
  try {
    const Inquiry = await InquiryService.getInquiryById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Inquiry fetched successfully!",
      data: Inquiry,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateInquiry = async (req, res) => {
  try {
    const Inquiry = new InquiryValidation(req);
    const updatedInquiry = await InquiryService.updateInquiry(
      req.params.id,
      Inquiry
    );

    res.status(200).json({
      status: "success",
      message: "Inquiry updated successfully!",
      data: updatedInquiry,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteInquiryById = async (req, res) => {
  try {
    await InquiryService.deleteInquiryById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Inquiry deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export default {
  createInquiry,
  getInquiries,
  getInquiryById,
  updateInquiry,
  deleteInquiryById,
};
