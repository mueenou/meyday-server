const router = require("express").Router();
const fs = require("fs");
const meds = JSON.parse(fs.readFileSync("./data/medicaments.json", "utf-8"));
const Med = require("../model/med");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// VALIDATION
const Joi = require("joi");
const verify = require("./verifyToken");

router.get("/", async (req, res) => {
  try {
    const foundMeds = await Med.find();
    console.log(foundMeds);
    res.status(200).send(foundMeds);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/loadMeds", (req, res) => {
  req.body = meds;
  Med.insertMany(req.body)
    .then((med) => {
      res.status(201).send(med);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
