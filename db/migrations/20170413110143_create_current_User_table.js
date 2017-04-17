'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('currentuser', (table) => {
    table.integer('id');
    table.string('name').notNullable();
    table.integer('age').notNullable();
    // table.string('photo').notNullable();
    table.string('description').notNullable();
    table.string('hobbies').notNullable();
    table.string('phone').notNullable();
    table.string('email').notNullable();
    table.timestamp('date_joined').defaultTo(knex.fn.now());
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('currentuser')
