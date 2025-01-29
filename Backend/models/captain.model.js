const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, `First Name must be at least 3 characters!`],
    },
    lastname: {
      type: String,
      minlength: [3, `Last Name must be at least 3 characters!`],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [7, `Email must be at least 7 characters!`],
    match: [/\S+@\S+\.\S+/, `Please enter a valid email`],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, `Color must be at least 3 characters!`],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, `Plate Number must be at least 3 characters!`],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, `Capacity must be at least 1!`],
    },
    type: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "cng"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    long: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;
