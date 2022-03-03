const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
console.log(process.env.DB_CONNECT);
// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to DB!")
);

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Import Routes
const authRoute = require("./routes/auth");
const medRoute = require("./routes/med");
// const loadDatas = require("./utils/insertMeds");

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/meds", medRoute);
// app.use("/api/meds", loadDatas);

app.listen(5000, () => console.log("Server up and running"));
