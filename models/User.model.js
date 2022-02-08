// mongoose is a mongodb library that help to create models easyer and faster
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, maxlength: 50, required: true },
    firstname: { type: String, maxlength: 50 },
    lastname: { type: String, maxlength: 50 },
    password: { type: String, required: true, minlength: 5 },
    experience: { type: Number },
    field: { type: String },
    skills: { type: String, maxlength: 3000 },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true,
      match: [
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      ],
    },
    photo: {
      type: String,
      default:
        "https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg",
    },
    description: { type: String, maxlength: 3000 },
    country: { type: String },
    city: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
        return ret;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
