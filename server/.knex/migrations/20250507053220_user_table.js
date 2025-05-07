export async function up(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments('id').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable(); // hashed password
        table.string('name');
        table.timestamps(true, true); // created_at, updated_at
    });
  }
  
  export async function down(knex) {
    await knex.schema.dropTable("users");
  }
  