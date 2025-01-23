const express = require("express");
const router = express.Router();
const usersData = require("../Datas/users.js");
const postsData = require("../Datas/posts.js");
const commentsData = require("../Datas/comments.js");
const posts = require("../Datas/posts.js");

// get routes

//route to get all the users
router.get("/users", (req, res) => {
  res.json(usersData);
});

//route to get all posts
router.get("/posts", (req, res) => {
  res.json(postsData);
});

// route to get all comments data
router.get("/comments", (req, res) => {
  res.json(commentsData);
});

//route to get the user with specific id

//user with ID
router.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === id) {
      return res.json(usersData[i]);
    }
  }

  res.send(`The user with id: ${id} does not exist`);
});
// posts with id
router.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < postsData.length; i++) {
    if (postsData[i].id === id) {
      return res.json(postsData[i]);
    }
  }
  res.send(`The Post with id: ${id} does not exist`);
});
//comments with id
router.get("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < commentsData.length; i++) {
    if (commentsData[i].id === id) {
      return res.json(commentsData[i]);
    }
  }
  res.status(404).send(`The comment with id: ${id} does not exist`);
});

//post routes

//user post
router.post("/users", (req, res) => {
  if (req.body.firstname && req.body.lastname && req.body.email) {
    const user = {
      id: usersData.length + 1,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };

    usersData.push(user);
    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } else {
    res.status(400).json({
      message:
        "Insufficient data. Please provide firstname, lastname, and email.",
    });
  }
});

//post for Posts
router.post("/posts", (req, res) => {
  if (req.body.title && req.body.text) {
    const post = {
      id: postsData.length + 1,
      title: req.body.title,
      text: req.body.text,
    };

    postsData.push(post);
    res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } else {
    res.status(400).json({
      message: "Insufficient data. Please provide title and text.",
    });
  }
});

//post for comments

router.post("/comments", (req, res) => {
  if (req.body.title && req.body.comment) {
    const comment = {
      id: commentsData.length + 1,
      title: req.body.title,
      comment: req.body.comment,
    };

    commentsData.push(comment);
    res.status(200).json({
      message: "Comment successfully created",
      comment: comment,
    });
  } else {
    res.status(400).json({ message: "Please enter title and comment" });
  }
});

//delete routes

//user delete

router.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let indexUser = -1;
  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === id) {
      indexUser = i;
      break;
    }
  }
  if (indexUser === -1) {
    return res.status(404).send(`The user with id: ${id} does not exist.`);
  }
  usersData.splice(indexUser, 1);

  res.status(200).json({ message: `User with ID ${id} deleted successfully.` });
});

//post delete
router.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let indexUser = -1;
  for (let i = 0; i < postsData.length; i++) {
    if (postsData[i].id === id) {
      indexUser = i;
      break;
    }
  }
  if (indexUser === -1) {
    return res.status(404).send(`The post with id: ${id} does not exist.`);
  }
  postsData.splice(indexUser, 1);

  res.status(200).json({ message: `Post with ID ${id} deleted successfully.` });
});

//comments delete

router.delete("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let indexUser = -1;
  for (let i = 0; i < commentsData.length; i++) {
    if (commentsData[i].id === id) {
      indexUser = i;
      break;
    }
  }
  if (indexUser === -1) {
    return res.status(404).send(`The user with id: ${id} does not exist.`);
  }
  commentsData.splice(indexUser, 1);

  res.status(200).json({ message: `User with ID ${id} deleted successfully.` });
});

// patch routes
//user patch
router.patch("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  for (let i = 0; i < usersData.length; i++) {
    if (usersData[i].id === id) {
      usersData[i].firstname = req.body.firstname;
      usersData[i].lastname = req.body.lastname;
      usersData[i].email = req.body.email;
      return res.status(200).json({ message: "Successfully updated" });
    }
  }
  res.status(400).json({ message: `The User with id: ${id} does not exist` });
});

//post patch

router.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);

  for (let i = 0; i < postsData.length; i++) {
    if (postsData[i].id === id) {
      postsData[i].title = req.body.title;
      postsData[i].text = req.body.text;

      return res.status(200).json({ message: "Successfully updated" });
    }
  }
  res.status(400).json({ message: `The post with id: ${id} does not exist` });
});

//comments patch
router.patch("/comments/:id", (req, res) => {
  const id = parseInt(req.params.id);

  for (let i = 0; i < commentsData.length; i++) {
    if (commentsData[i].id === id) {
      commentsData[i].title = req.body.title;
      commentsData[i].comment = req.body.comment;

      return res.status(200).json({ message: "Successfully updated" });
    }
  }

  res.status(400).json({ message: `The post with id: ${id} does not exist` });
});

module.exports = router;
