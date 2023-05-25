const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");
const { ObjectId } = require("mongodb");

const Posts = schemas.Posts;
const Records = schemas.Records;

// Post to db for Posts
router.post("/posts", async (req, res) => {
  const { title, genre, recordType, author } = req.body;

  const recordData = {
    title: title,
    genre: genre,
    recordType: recordType,
    author: author,
  };
  const newRecord = new Posts(recordData);
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

// ! POSTS DB
// * GET
router.get("/posts", async (req, res) => {
  const posts = Posts;
  const recordData = await posts.find({}).exec();

  if (recordData) {
    res.send(JSON.stringify(recordData));
  }
});
// * POST
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
// * PUT
router.put("/posts/:id", async (req, res) => {
  Posts.findByIdAndUpdate({ _id: new ObjectId(req.params.id) }, req.body)
    .then(() =>
      Posts.findOne({ _id: req.params.id }).then((updatedData) => {
        res.send(updatedData);
      })
    )
    .catch((err) => {
      res.status(500).json({ error: "Could not update the document" });
    });
});
// * DELETE
router.delete("/posts/:id", async (req, res) => {
  Posts.findByIdAndDelete({ _id: new ObjectId(req.params.id) })
    .then(() => {
      Posts.deleteOne({ _id: req.params.id }).then((deletedData) => {
        res.send(deletedData);
      });
    })
    .catch((err) => {
      res.status(500).json({ error: "Could not delete the document" });
    });
});

// ! RECORD TYPES DB
// * GET
router.get("/record-types", async (req, res) => {
  const recordData = await Records.find({}).exec();

  if (recordData) {
    res.send(JSON.stringify(recordData));
  }
});
// * POST
router.post("/record-types", async (req, res) => {
  const { title, value } = req.body;

  const recordData = {
    title: title,
    value: value,
  };
  const newRecordType = new Records(recordData);
  const saveRecord = await newRecordType.save();
});

module.exports = router;
