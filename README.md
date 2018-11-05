# Balanc3 BE Take Home

## Tech stack
* Node.js
* Express
* GraphQL
* Apollo Server
* PostgreSQL
* Knex.js

## How to install
### Dependencies List
* node >= 10
* npm >= 6
* postgresql >= 10

### How to run
* Create a db called `balanc3` at your pg instance. There's is `npm run db:create` but depends on your local `psql` config to work.
* `mv .env.sample .env` and change the sample values as you need in `.env`file
* `npm install`
* `npm run db:migrate`
* `npm run dev`

## How to use
Transaction query
```
transactions(
  address: String!
  limit: Int
  filter: TransactionFilterInput
): [Transaction]
```

Balance query
```
balance(
  address: String!
): Balance
```

Open `localhost:3000/graphql` to get access to the GraphQL playground. The schema definition is there
