const router = require("express").Router();
const fs = require("fs");
const mongoose = require("mongoose");
const meds = JSON.parse(fs.readFileSync("./data/medicaments.json", "utf-8"));
const Med = require("../model/med");
// var medsJson = require("../data/medicaments.json");
// console.log(meds);

router.post("/loadMeds", async () => {
  try {
    const allMeds = await Med.insertMany(meds);
    allMeds.save();
    console.log("Done!");
    process.exit();
  } catch (e) {
    console.log("error", e);
    process.exit();
  }
});

module.exports = router;
