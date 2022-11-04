exports.up = function(knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table
      .foreign("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.integer("order_intent_id").unsigned().notNullable();
    table
      .foreign("order_intent_id")
      .references("id")
      .inTable("order_intents")
      .onDelete("CASCADE");
    table.float("total_cost");
    table.string("tracking_number");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("orders");
};