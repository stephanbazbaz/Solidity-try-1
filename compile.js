const path = require('path');
const fs = require('fs');
const solc = require('solc');
//https://rinkeby.infura.io/v3/ebf667f0828b45b7b35d776e53cce44d
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8')
module.exports =  solc.compile(source, 1).contracts[':Inbox'];

