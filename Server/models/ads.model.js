const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Ads = new Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    Admin: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

const AdsList = mongoose.model("Ads", Ads);
module.exports = AdsList;
