/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const usersData = require("../seed-data/users");
const logsData = require("../seed-data/logs");

exports.seed = async function (knex) {
  await knex("feelings_logs").del();
  await knex("users").del();

  await knex("users").insert(usersData);
  await knex("feelings_logs").insert(logsData);
};
