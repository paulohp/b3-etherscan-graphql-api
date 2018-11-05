const database = require('../db')
const transactionScrapper = require('../scrapper/transactions')

const getTransactions = async (address, filter, limit) => await database('transactions')
  .where({
    address,
    ...filter
  })
  .limit(limit)
  .select()

const transactionsResolver = async (_, {
  address,
  filter,
  limit
}) => {
  try {
    const txInDb = await getTransactions(address, filter, limit)
    if (!txInDb.length) {
      const results = await transactionScrapper(address)
      await database('transactions').insert(results)
      return getTransactions(address, filter, limit)
    }
    return txInDb
  } catch (err) {
    console.log(err)
    return getTransactions(address, filter, limit)
  }
}

module.exports = transactionsResolver