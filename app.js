const express = require("express");
const mongoose = require("mongoose");
const proveedorRouter = require("./routes/ProveedorRoutes");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/proveedores", proveedorRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB Atlas");
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
