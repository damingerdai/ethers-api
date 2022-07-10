import { ethers } from 'ethers';

const chainUrl = 'http://localhost:8545';
const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(chainUrl);

const accounts = await provider.listAccounts();

console.log(accounts);