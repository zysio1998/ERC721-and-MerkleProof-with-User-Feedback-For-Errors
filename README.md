1. git clone 
2. cd into file
3. yarn install
4. yarn start
5. yarn build
6. deploy on vercel or wherever

Links to all

1. link to etherscan - https://rinkeby.etherscan.io/address/0xA098f9aC53cB8e919D31aF700667fc54d8E0407F
2. link to dapp - https://erc-721-and-merkle-proof-with-user-feedback-for-errors.vercel.app/

To change this to suit a specific project

1. Create a contract on remix and deploy it and set the max per transaction allowed for public. AMOUNTFORTEAM and _MAXPUBLICTX. They must match
2. Verify the Contract
3. Change the contract address in the dapp
4. Change the ABI in the ABI.json file

5. Generate the merkle root and setMerkleRoot
6. setBaseURi
7. set the public or presale active when needed

to get a new merkle root you need to run node merkle_tree.js on the backend server https://glitch.com/edit/#!/scarce-guttural-museum

Then set the Merkle Root
e.g 0x0854a5116dc1f009a0c2b93223512f108d19d5f300af691ed6c3c6dec69ad803
The add the Base URI including a backslash
e.g https://ipfs.io/ipfs/QmaYsLRXHahhBzSP4DFRNacWcCgJug32KnmfH8rNLn9ArW/


User feedback from the Solidity Smart Contract, revert reason
Change the error messages to whatever you have in the contract

The merkle tree lives in an external source, on - glitch.com
Run the merkle tree on glitch to get a new merkle root and change it on Etherscan

The smart contract uses ERC721A - for extreme cheap transactions

The UI is not complete, it's just made for functionality

The DAPP prompts a network switch if the user is on the wrong network




