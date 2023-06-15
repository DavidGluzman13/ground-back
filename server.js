// Require the routes file

// const someRoutes = require("./routes/some-routes");
// const otherRoutes = require("./routes/other-routes");

// app.use("/api/some", someRoutes);
// app.use("/api/other", otherRoutes);

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const knex = require("knex")(require("./knexfile"));

const userRoutes = require("./routes/user-routes");

app.get("/", (req, res) => {
  res.send("nice");
});

// all users routes
app.use("/users", userRoutes);

app.get("/users", (_req, res) => {
  knex
    .select("*")
    .from("users")
    .then((users) => {
      res.json(users);
    });
});

app.get("/users/:userId/logs", (req, res) => {
  // add the ability to get posts for a specific user
  // get id of user
  knex("feelings_logs")
    // .select("*")
    // .from("log")
    .where({ user_id: req.params.userId })
    .then((logs) => {
      res.json(logs);
    });
});

app.get("/logs", (_req, res) => {
  knex("feelings_logs")
    .select("*")
    .then((logs) => {
      res.json(logs);
    });
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
