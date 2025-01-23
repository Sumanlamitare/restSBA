const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/apiRoutes.js");

//importing body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
//welcome page get

app.get("/", (req, res) => {
  res.send("Welcome to Rest APP");
});

app.use("/", routes);

// set up the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/////
