const database = require('../db')
const balancesScrapper = require('../scrapper/balance')

const getBalance = async (address) => await database('balances')
  .where({
    address
  })
  .first()

const balancesResolver = async (_, {
  address
}) => {
  const results = await balancesScrapper(address)
  try {
    const balancesInDB = await getBalance(address)

    if (!balancesInDB.length) {
      await database('balances').insert(results)
      return getBalance(address)
    }

    return balancesInDB
  } catch (err) {
    console.log(err)
    return getBalance(address)
  }
}

module.exports = balancesResolver