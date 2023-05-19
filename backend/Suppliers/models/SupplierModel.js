import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  suppliedAmount: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const SupplierModel = mongoose.model("Suppliers", SupplierSchema);

export default SupplierModel;
