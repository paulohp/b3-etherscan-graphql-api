exports.up = knex =>
  knex.schema.createTable('balances', t => {
    t.increments('id').primary()
    t.string('address')
    t.string('balance')
  }).alterTable('balances', t => t.unique('address'))

exports.down = knex => knex.schema.dropTableIfExists('balances')