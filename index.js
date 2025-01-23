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
  res.send("Welcome to Rest APP");
});

app.use("/", routes);

app.use((req, res, next) => {
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
