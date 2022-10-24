exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("email");
    table.string("phone_number");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};