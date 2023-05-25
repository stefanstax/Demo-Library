const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");
const { ObjectId } = require("mongodb");

// Post to db for Posts
router.post("/posts", async (req, res) => {
  const { title, genre, recordType, author } = req.body;

  const recordData = {
    title: title,
    genre: genre,
    recordType: recordType,
    author: author,
  };
  const newRecord = new schemas.Posts(recordData);
  await newRecord.save();

  res.end();
});

router.post("/podcast-categories", async (req, res) => {
  const { title, value } = req.body;

  const recordData = {
    title: title,
    value: value,
  };
  const newPodcastGenre = new schemas.Podcasts(recordData);
  await newPodcastGenre.save();

  res.end();
});

router.get("/podcast-categories", async (req, res) => {
  const podcastCategories = schemas.Podcasts;
  const recordData = await podcastCategories.find({}).exec();

  if (recordData) {
    res.send(JSON.stringify(recordData));
  }
});

router.post("/song-categories", async (req, res) => {
  const { title, value } = req.body;
  const recordData = {
    title: title,
    value: value,
  };
  const newSongCategory = new schemas.Songs(recordData);
  await newSongCategory.save();
  res.end();
});

router.get("/song-categories", async (req, res) => {
  const songCategories = schemas.Songs;
  const recordData = await songCategories.find({}).exec();

  if (recordData) {
    res.send(JSON.stringify(recordData));
  }
});

router.post("/movie-categories", async (req, res) => {
  const { title, value } = req.body;

  const recordData = {
    title: title,
    value: value,
  };
  const newMovieGenre = new schemas.Movies(recordData);
  await newMovieGenre.save();

  res.end();
});

router.get("/movie-categories", async (req, res) => {
  const movieCategories = schemas.Movies;
  const recordData = await movieCategories.find({}).exec();

  if (recordData) {
    res.send(JSON.stringify(recordData));
  }
});

router.delete("/posts/:id", async (req, res) => {
  schemas.Posts.deleteOne({ _id: new ObjectId(req.params.id) })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not delete the document" });
    });
});

router.put("/posts/:id", async (req, res) => {
  schemas.Posts.updateOne({ _id: new ObjectId(req.params.id) })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not update the document" });
    });
});

// Get all posts from db
router.get("/posts", async (req, res) => {
  const posts = schemas.Posts;
  const recordData = await posts.find({}).exec();

  if (recordData) {
    res.send(JSON.stringify(recordData));
  }
});

// Post to db for Authentication
router.post("/authentication", async (req, res) => {
  const { username, password } = req.body;
  const registerData = {
    username: username,
    password: password,
  };
  const newRecord = new schemas.Register(registerData);
  const savePost = await newRecord.save();

  if (savePost) {
    res.send("Post crated!");
  }
  res.end();
});

module.exports = router;
