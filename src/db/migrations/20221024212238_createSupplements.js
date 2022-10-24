
exports.up = function(knex) {
  return knex.schema.createTable("supplements", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.text("description");
    table.string("sku");
    table.string("photo_url");
    table.float("unit_price");
    table.specificType("category_ids", "integer ARRAY");
    table.boolean("in_stock");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("supplements");
};
