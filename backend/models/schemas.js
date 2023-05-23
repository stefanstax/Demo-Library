const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
  id: { type: Number, default: Math.round(Math.random() * 999999) },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const postSchema = new Schema({
  id: { type: Number, default: Math.round(Math.random() * 99999) },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  recordType: { type: String, required: true },
  author: { type: String, required: true },
});

const Posts = mongoose.model("Posts", postSchema, "posts");
const Register = mongoose.model("Register", registerSchema, "authentication");
// prettier-ignore
const mySchemas = { "Register": Register, "Posts": Posts };
module.exports = mySchemas;
