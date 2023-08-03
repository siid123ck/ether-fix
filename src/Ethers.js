import { ethers } from 'ethers';
import abiForge from './data/forge.json';
import abiErc1155 from './data/erc1155.json';


// Ethereum provider instance
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Ethereum wallet private key or JSON wallet file
// const privateKey = '';

// Create a signer with the private key or JSON wallet
// const wallet = new ethers.Wallet(privateKey, provider);
// const signer = wallet.connect(provider);

const erc1155 = '0xb5465ED8EcD4F79dD4BE10A7C8e7a50664e5eeEB';
const forgeContractAddress = '0x8059B0AE35c113137694Ba15b2C3585aE77Bb8E9';

// Ethereum contract instances
const ercContract = new ethers.Contract(erc1155, abiErc1155, provider);
const forgeContract = new ethers.Contract(forgeContractAddress, abiForge, provider);

export { provider, forgeContract, ercContract };
