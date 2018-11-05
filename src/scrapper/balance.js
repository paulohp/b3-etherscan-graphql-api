const axios = require('axios')
const ETHERSCAN_URL = process.env.ETHERSCANURL
const API_KEY = process.env.ETHERSCANAPIKEY

const fetch = async (url) => {
  return axios({
    url: `${ETHERSCAN_URL}${url}&apikey=${API_KEY}`,
    method: 'GET'
  })
}

const getBalanceByAddress = async (address) => {
  const {
    data: {
      result
    }
  } = await fetch(`module=account&action=balance&address=${address}&sort=asc`)

  return {
    address,
    balance: result
  }
}

module.exports = getBalanceByAddress