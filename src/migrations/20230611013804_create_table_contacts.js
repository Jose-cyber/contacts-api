/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable("contacts", function(table){
        table.increments('id').primary();
        table.string('name').notNull();
        table.string('email').notNull();
        table.string('telephone').notNull();
        table.text('massage').notNull();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
  return knex.schema.dropTable("contacts");
};
