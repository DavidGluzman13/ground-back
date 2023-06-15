/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      // Renamed the table to "users"
      table.increments("id");
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.integer("age").notNullable();
      table.
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("feelings_logs", function (table) {
      // Renamed the table to "feelings_logs"
      table.increments("id");
      table.integer("user_id").unsigned().notNullable();
      table.date("date_column");
      table.string("content").notNullable();
      table.integer("feeling").unsigned().notNullable();
      table.integer("hunger").unsigned().notNullable();
      table.integer("energy").unsigned().notNullable();
      table.integer("hours_slept").unsigned().notNullable(); // Updated the column name to "hours_slept"
      table
        .foreign("user_id")
        .references("id")
        .inTable("users") // Updated the table name to "users"
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("feelings_logs").dropTable("users"); // Updated the table names to "feelings_logs" and "users"
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
