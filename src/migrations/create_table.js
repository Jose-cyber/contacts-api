exports.up = function(knex){
  return knex.schema.createTable('contacts', (table) =>{
    table.increments('id').primary();
    table.string('name').notNull();
    table.string('Email').notNull();
    table.string('telephone').notNull();
    table.text('massage').notNull();
  })
} 
exports.down = function(knex){
  return knex.schema.dropTable('contacts');
}