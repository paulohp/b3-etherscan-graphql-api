const express = require('express')
const app = express()

const {
  ApolloServer,
  gql
} = require('apollo-server-express')

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost'

const typeDefs = gql `
  type Balance {
    id: ID
    address: String,
    balance: String!
  }

  type Transaction {
    id: ID
    address: String!
    hash: String!
    blockNumber: String!
    to: String!
    from: String!
    value: String!
  }

  input TransactionFilterInput {
    hash: String,
    to: String,
    from: String
  }

  type Query {
    transactions(address: String!, limit: Int, filter: TransactionFilterInput): [Transaction],
    balance(address: String!): Balance
  }
`

const resolvers = require('./src/resolvers')
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({
  app
})

app.listen({
  port: PORT
}, () => {
  console.log(`🚀 Server ready at http://${HOST}:${PORT}${server.graphqlPath}`)
})