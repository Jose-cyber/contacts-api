exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table){
        table.increments('id').primary();
        table.date("date").notNull();
        table.time("time").notNull();
        table.string('name').notNull();
        table.string('email').notNull();
        table.string('telephone').notNull();
        table.text('message').notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("contacts");
  };
  
