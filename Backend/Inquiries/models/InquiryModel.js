import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  inquiry: {
    type: String,
    required: true,
  },
});

const InquriyModel = mongoose.model("Inquiries", InquirySchema);

export default InquriyModel;
