export function up(knex) {
  return knex.schema.createTable("placeEvent", function (table) {
    table.increments();
    table.uuid("uuid").defaultTo(knex.fn.uuid());
    table.text("name").notNullable;
    table.string("placeId").notNullable;
    table.integer("userId").notNullable;
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex) {
  return knex.schema.dropTable("placeEvent");
};
