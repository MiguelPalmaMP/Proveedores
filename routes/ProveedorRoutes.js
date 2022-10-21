const express = require("express");
const {
  getAllProveedores,
  createProveedor,
  getProveedorById,
  updateProveedor,
  deleteProveedor,
} = require("../controllers/ProveedorController");

const router = express.Router();

router.route("/").get(getAllProveedores).post(createProveedor);
router.route("/:id").get(getProveedorById).put(updateProveedor).delete(deleteProveedor);

module.exports = router;
