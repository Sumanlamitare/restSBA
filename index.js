const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/apiRoutes.js");

//importing body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//log requests
app.use((req, res, next) => {
  const date = new Date();
  console.log(
    `The request to ${req.method} ${req.originalUrl} was made at ${date}`
  );
  next();
});

//welcome page get

app.get("/", (req, res) => {
  res.json({
    Name: "Express Application",
    Aurthur: "Suman Lamitare",
    Message: "Welcome to Express application",
    Instruction:
      "Add /users in the URL to get all the users. /user/id to get specific users. Follow the same format for Posts and Comments",
    Date: new Date().toDateString(),
    Time: new Date().toLocaleString(),
  });
});

app.use("/", routes);

app.use((err, req, res, next) => {
  if (err.message) {
    // err.status = 500;
    res.json({
      Status: `This is the status code ${err.status}. `,
      error: err.message,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found`,
    status: 404,
  });
});

// set up the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/////
