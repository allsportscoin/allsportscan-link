const prefixForNetwork = require('./prefix-for-network')

module.exports = function (hash, network) {
  const prefix = prefixForNetwork(network)
  // return 'http://' + prefix + 'etherscan.io/tx/' + hash
	return `http://test-socscan.allsportschain.com/#/transaction/detail?txId=${hash}`
}
