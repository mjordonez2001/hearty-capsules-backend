exports.up = function(knex) {
  return knex.schema.createTable("quiz_results", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.text("description");
    table.specificType("recommended_supplement_ids", "integer ARRAY"); 
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("user_id");
};