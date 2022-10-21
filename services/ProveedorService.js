const ProveedorModel = require("../models/Proveedor");

exports.getAllProveedores = async () => {
  return await ProveedorModel.find();
};

exports.createProveedor = async (proveedor) => {
  return await ProveedorModel.create(proveedor);
};
exports.getProveedorById = async (id) => {
  return await ProveedorModel.findById(id);
};

exports.updateProveedor = async (id, proveedor) => {
  return await ProveedorModel.findByIdAndUpdate(id, proveedor);
};

exports.deleteProveedor = async (id) => {
  return await ProveedorModel.findByIdAndDelete(id);
};
