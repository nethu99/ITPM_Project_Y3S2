import DonationModel from "../models/DonationModel.js";

async function createDonation(Donation) {
  try {
    const newDonation = new DonationModel(Donation);
    return await newDonation.save();
  } catch (error) {
    throw new Error("Error while adding the Donation: " + error);
  }
}

async function getDonations() {
  try {
    return await DonationModel.find();
  } catch (error) {
    throw new Error("Error while getting Donations: " + error);
  }
}

async function getDonationById(id) {
  try {
    return await DonationModel.findById(id);
  } catch (error) {
    throw new Error("Error while getting Donation by id: " + error);
  }
}

async function updateDonation(id, donation) {
  try {
    return await DonationModel.findOneAndUpdate({ _id: id }, donation);
  } catch (error) {
    throw new Error("Error while updating Donation by id: " + error);
  }
}

async function deleteDonationById(id) {
  try {
    return await DonationModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error while deleting Donation by id: " + error);
  }
}

export default {
  createDonation,
  getDonations,
  getDonationById,
  updateDonation,
  deleteDonationById,
};
