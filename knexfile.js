module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.DBUSER,
      password: process.env.PGPASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.DBUSER,
      password: process.env.PGPASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.DBUSER,
      password: process.env.PGPASSWORD,
      ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}