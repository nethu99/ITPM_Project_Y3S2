import SupplierModel from "../models/SupplierModel.js";

async function createSupplier(supplier) {
  try {
    const newSupplier = new SupplierModel(supplier);
    return await newSupplier.save();
  } catch (error) {
    throw new Error("Error while adding the supplier: " + error);
  }
}

async function getSuppliers() {
  try {
    return await SupplierModel.find();
  } catch (error) {
    throw new Error("Error while getting suppliers: " + error);
  }
}

async function getSupplierById(id) {
  try {
    return await SupplierModel.findById(id);
  } catch (error) {
    throw new Error("Error while getting supplier by id: " + error);
  }
}

async function updateSupplier(id, supplier) {
  try {
    return await SupplierModel.findOneAndUpdate({ _id: id }, supplier);
  } catch (error) {
    throw new Error("Error while updating supplier by id: " + error);
  }
}

async function deleteSupplierById(id) {
  try {
    return await SupplierModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error while deleting supplier by id: " + error);
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplierById,
};
