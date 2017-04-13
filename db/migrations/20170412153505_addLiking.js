'use strict';

exports.up = (knex, Promise) => {
  return knex.schema.table('profile', (table) => {
    table.string('likes')
    table.string('likedBy')
    })
};

exports.down = (knex, Promise) => knex.schema.dropColumns('profile')
