
exports.up = function(knex) {
  return knex.schema.createTable("supplements", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.text("description");
    table.string("photo_url");
    table.float("unit_price");
    table.specificType("benefits", "text ARRAY");
    table.integer("category_id");
    table
      .foreign("category_id")
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("supplements");
};
