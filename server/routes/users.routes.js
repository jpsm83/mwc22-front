// .populate in users.routes are causing error in the front end
// Objects are not valid as a React child
// .populate in auth.routes are working fine
// why??? only god knows....

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
