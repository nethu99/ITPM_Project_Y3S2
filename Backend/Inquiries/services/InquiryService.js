import InquriyModel from "../models/InquiryModel.js";

async function createInquiry(inquiry) {
  try {
    const newInquiry = new InquriyModel(inquiry);
    return await newInquiry.save();
  } catch (error) {
    throw new Error("Error while submitting the inquiry: " + error);
  }
}

async function getInquiries() {
  try {
    return await InquriyModel.find();
  } catch (error) {
    throw new Error("Error while getting inquiries: " + error);
  }
}

async function getInquiryById(id) {
  try {
    return await InquriyModel.findById(id);
  } catch (error) {
    throw new Error("Error while getting inquiry by id: " + error);
  }
}

async function updateInquiry(id, inquiry) {
  try {
    return await InquriyModel.findOneAndUpdate({ _id: id }, inquiry);
  } catch (error) {
    throw new Error("Error while updating item by id: " + error);
  }
}

async function deleteInquiryById(id) {
  try {
    return await InquriyModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error while deleting inquiry by id: " + error);
  }
}

export default {
  createInquiry,
  getInquiries,
  getInquiryById,
  updateInquiry,
  deleteInquiryById,
};
