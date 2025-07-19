const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

router.get("/", async (req, res) => {
  const data = await Campaign.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const newCampaign = new Campaign(req.body);
  await newCampaign.save();
  res.status(201).json(newCampaign);
});

module.exports = router;
