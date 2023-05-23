const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");
const express = require("express");

// Post to db for Posts
router.post("/posts/:id", async (req, res) => {
  const { title, genre, recordType, author } = req.body;
  const action = req.params.id;

  switch (action) {
    case "send":
      const postData = {
        title: title,
        genre: genre,
        recordType: recordType,
        author: author,
      };
      const newPost = new schemas.Posts(postData);
      const savePost = await newPost.save();

      if (savePost) {
        res.send("Record has been created.");
      } else {
        res.send("Record update failed");
      }
      break;

    default:
      res.send("Invalid Request");
      break;
  }
  res.end();
});

// Get all posts from db
router.get("/posts", async (req, res) => {
  const posts = schemas.Posts;
  const postData = await posts.find({}).exec();

  if (postData) {
    res.send(JSON.stringify(postData));
  }
});

// Post to db for Authentication
router.post("/authentication", async (req, res) => {
  const { username, password } = req.body;
  const registerData = {
    username: username,
    password: password,
  };
  const newPost = new schemas.Register(registerData);
  const savePost = await newPost.save();

  if (savePost) {
    res.send("Post crated!");
  }
  res.end();
});

module.exports = router;
