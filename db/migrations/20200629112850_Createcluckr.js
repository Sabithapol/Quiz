
exports.up = (knex) =>
knex.schema.createTable("cluckrs", (table) => {
  table.increments("id");
  table.string("username");
  table.text("content");
  table.string("logoUrl");
  table.timestamps(false, true);
});

exports.down = (knex) => knex.schema.dropTable("cluckrs");
