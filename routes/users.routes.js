const express = require("express");
const User = require("../models/User.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  // get all users
  User.find({})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  // get an especific user
  User.findOne({ _id: id })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
