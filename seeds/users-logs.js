/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const usersData = require("../seed-data/users");
const logsData = require("../seed-data/logs");

exports.seed = function (knex) {
  return knex("feelings_logs")
    .del()
    .then(function () {
      return knex("users").del(); // Updated the table name to "users"
    })
    .then(function () {
      return knex("users").insert(usersData); // Updated the table name to "users"
    })
    .then(() => {
      return knex("feelings_logs").insert(logsData); // Updated the table name to "feelings_logs"
    });
};
