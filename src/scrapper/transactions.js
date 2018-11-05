const axios = require('axios')
const ETHERSCAN_URL = process.env.ETHERSCANURL
const API_KEY = process.env.ETHERSCANAPIKEY

const fetch = async (url) => {
  return axios({
    url: `${ETHERSCAN_URL}${url}&apikey=${API_KEY}`,
    method: 'GET'
  })
}

const getTransactionsByAddress = async (address) => {
  const {
    data: {
      result
    }
  } = await fetch(`module=account&action=txlist&address=${address}&sort=asc`)

  // here I'm using object destructuring and property shorthand
  // to pick some fields from the original result data
  const txList = result.map(tx => {
    tx.address = address
    return (({
      address,
      hash,
      blockNumber,
      to,
      from,
      value
    }) => ({
      address,
      hash,
      blockNumber,
      to,
      from,
      value
    }))(tx)
  })

  return txList
}

module.exports = getTransactionsByAddress