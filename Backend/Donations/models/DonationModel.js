import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  donorName: {
    type: String,
    required: true,
  },
  donorNIC: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  donationCost: {
    type: Number,
    required: true,
  },
  referenceNumber: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const DonationModel = mongoose.model("Donations", DonationSchema);

export default DonationModel;
