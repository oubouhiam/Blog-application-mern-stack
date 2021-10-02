const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const port = process.env.PORT || 8080;
const logger = require("./config/logger");



app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
mongoose
  .connect("mongodb://localhost:27017/amarchtechblog", {
    useNewUrlParser: true,
  })
  .then(() => {
    logger.info("Successfully connected to the database");
  })
  .catch((err) => {
    logWinston.error("Could not connect to the database. Exiting now...", err);
    logger.exit();
  });

// _______________import router_______________
const UsersRoutes = require("./routes/users.router");
const ArticlesRoutes = require("./routes/articles.router");

app.use("/users",UsersRoutes);

app.use("/articles", ArticlesRoutes);

module.exports = app;

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}); 