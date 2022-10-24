exports.up = function(knex) {
  return knex.schema.createTable("supplements_inventory", (table) => {
    table.increments("id").primary();
    table.integer("supplements_id").unsigned().notNullable();
    table
      .foreign("supplements_id")
      .references("id")
      .inTable("supplements")
      .onDelete("CASCADE");
    table.integer("quantity");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("supplements_inventory");
};
