// bodyParser is responsible for parsing the incoming request bodies in a middleware before you handle it
const bodyParser = require("body-parser");

// cookie-parser is a middleware which parses cookies attached to the client request object
const cookieParser = require("cookie-parser");

// logger is a middleware to archive log files, it uses morgan as a helper to generate the request logs
const logger = require("morgan");

// express is a node framework that allows us to create web server envioraments
const express = require("express");

// path module provides a way of working with directories and file paths
const path = require("path");

module.exports = (app) => {
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "..", "public")));
};
