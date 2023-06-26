const formatDate = require("../utils/date");

const knex = require("knex")(require("../knexfile"));

const index = (_req, res) => {
  // const date = formatDate(new Date(req.body.date_column));

  knex("feelings_logs")
    .select([
      "feelings_logs.feeling",
      "feelings_logs.activity",
      "feelings_logs.energy",
      "feelings_logs.hours_slept",
      `feelings_logs.date_column`,
      "feelings_logs.content",
      "users.name",
    ])
    .join("users", "feelings_logs.user_id", "users.id")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving logs: ${err}`));
};

const add = (req, res) => {
  const date = formatDate(new Date(req.body.date_column));

  knex("feelings_logs")
    .insert({
      user_id: req.body.userId,
      content: req.body.content,
      energy: req.body.energy,
      feeling: req.body.feeling,
      activity: req.body.activity,
      hours_slept: req.body.hours_slept,
      date_column: date,
    })
    .then((result) => {
      res.status(201).send("New log posted!");
    })
    .catch(() => {
      res.status(500).json({ message: "Unable to create new inventory" });
    });
};

module.exports = {
  index,
  add,
};
