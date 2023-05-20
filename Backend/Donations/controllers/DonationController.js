import DonationService from "../services/DonationService.js";
import DonationValidation from "../services/Validation.js";

const createDonation = async (req, res) => {
  try {
    const Donation = new DonationValidation(req);

    // Validate the request body
    await Donation.validate();

    const newDonation = await DonationService.createDonation(Donation);

    res.status(200).json({
      status: "success",
      message: "Donation added successfully!",
      data: newDonation,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getDonations = async (req, res) => {
  try {
    const donations = await DonationService.getDonations();

    res.status(200).json({
      status: "success",
      message: "Donations fetched successfully!",
      data: donations,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getDonationById = async (req, res) => {
  try {
    const Donation = await DonationService.getDonationById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Donation fetched successfully!",
      data: Donation,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateDonation = async (req, res) => {
  try {
    const Donation = new DonationValidation(req);
    const updatedDonation = await DonationService.updateDonation(
      req.params.id,
      Donation
    );

    res.status(200).json({
      status: "success",
      message: "Donation updated successfully!",
      data: updatedDonation,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteDonationById = async (req, res) => {
  try {
    await DonationService.deleteDonationById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Donation deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export default {
  createDonation,
  getDonations,
  getDonationById,
  updateDonation,
  deleteDonationById,
};
