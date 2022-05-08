1. git clone the repo
2. cd into the repo
3. yarn install - to install all packages
4. yarn start - to start the dapp on localhost

Contract etherscan - https://rinkeby.etherscan.io/address/0x7b064d73a353fab811444B7e179f8B7469AB3989

There is a lot of failed transactions as I was developing the user feedback for the failed transactions

To start the smart contract

setActive - True -- for the public mint
setpresale - True -- for only whitelist mints

When creating the contract through remix, set the two below to be the same value e.g
AMOUNTFORTEAM: 5
_MAXPUBLICTX: 5

This sets the amount of transactions at a time you allow. e.g 5 mints at a time

This dapp contains

User feedback from the Solidity Smart Contract, revert reason
Change the error messages to whatever you have in the contract

The merkle tree lives in an external source, on - glitch.com
Run the merkle tree on glitch to get a new merkle root and change it on Etherscan

The smart contract uses ERC721A - for extreme cheap transactions

The UI is not complete, it's just made for functionality


