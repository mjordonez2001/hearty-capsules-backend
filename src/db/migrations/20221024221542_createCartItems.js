exports.up = function(knex) {
  return knex.schema.createTable("cart_items", (table) => {
    table.increments("id").primary();
    table.integer("supplements_id").unsigned().notNullable();
    table
      .foreign("supplements_id")
      .references("id")
      .inTable("supplements")
      .onDelete("CASCADE");
    table.integer("quantity");
    table.boolean("is_subscription");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cart_items");
};
