exports.up = knex =>
  knex.schema.createTable('transactions', t => {
    t.increments('id').primary()
    t.string('address')
    t.string('hash')
    t.string('blockNumber')
    t.string('from')
    t.string('to')
    t.string('value')
  }).alterTable('transactions', t => t.unique('hash'))

exports.down = knex => knex.schema.dropTableIfExists('transactions')