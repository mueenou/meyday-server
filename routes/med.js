const router = require("express").Router();
const fs = require("fs");
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

module.exports = router;
