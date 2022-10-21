const proveedorService = require("../services/ProveedorService");

exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await proveedorService.getAllProveedores();
    res.json({ data: proveedores, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProveedor = async (req, res) => {
  try {
    const proveedor = await proveedorService.createProveedor(req.body);
    res.json({ data: proveedor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await proveedorService.getProveedorById(req.params.id);
    res.json({ data: proveedor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProveedor = async (req, res) => {
  try {
    const proveedor = await proveedorService.updateProveedor(req.params.id, req.body);
    res.json({ data: proveedor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProveedor = async (req, res) => {
  try {
    const proveedor = await proveedorService.deleteProveedor(req.params.id);
    res.json({ data: proveedor, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
