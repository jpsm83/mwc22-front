// mongoose is a mongodb library that help create models easyer and faster
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to Mongoose"))
  .catch((error) => console.error(error));

module.exports = mongoose;
