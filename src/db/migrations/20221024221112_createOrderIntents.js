exports.up = function(knex) {
  return knex.schema.createTable("order_intents", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.specificType("cart_item_ids", "integer ARRAY");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("order_intents");
};