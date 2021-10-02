const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Articles = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageArticle: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    verified: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

const ArticleList = mongoose.model("Articles", Articles);
module.exports = ArticleList;
