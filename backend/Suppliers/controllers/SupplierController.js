import SupplierService from "../services/SupplierService.js";
import Validation from "../services/Validation.js";

const createSupplier = async (req, res) => {
  try {
    const supplier = new Validation(req);

    // Validate the request body
    await supplier.validate();

    const newSupplier = await SupplierService.createSupplier(supplier);

    res.status(200).json({
      status: "success",
      message: "Supplier added successfully!",
      data: newSupplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getSuppliers = async (req, res) => {
  try {
    const supplier = await SupplierService.getSuppliers();

    res.status(200).json({
      status: "success",
      message: "Suppliers fetched successfully!",
      data: supplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const supplier = await SupplierService.getSupplierById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Supplier fetched successfully!",
      data: supplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const supplier = new Validation(req);
    const updatedSupplier = await SupplierService.updateSupplier(
      req.params.id,
      supplier
    );

    res.status(200).json({
      status: "success",
      message: "Supplier updated successfully!",
      data: updatedSupplier,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteSupplierById = async (req, res) => {
  try {
    await SupplierService.deleteSupplierById(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Supplier deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export default {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplierById,
};
