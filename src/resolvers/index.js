const transactions = require('./transactions')
const balance = require('./balance')
const resolvers = {
  Query: {
    transactions,
    balance
  }
}

module.exports = resolvers