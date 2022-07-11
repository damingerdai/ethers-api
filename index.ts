import { chainConfig } from './src/config';
import { Ethers } from './src/ethers';
import dotenv from 'dotenv';

dotenv.config();

const chainUrl = 'http://' + chainConfig.nodeAddr + ':' + chainConfig.gethPort;
const address = chainConfig.defaultCoinbase;
const ethers = new Ethers(chainUrl);
const balance = await ethers.getBalance(address);

console.log(balance);

console.log(typeof balance);

const keystore1 = await ethers.createKeystore('1');
const keystore2 = await ethers.createKeystore('1');
console.log(keystore1);
console.log(keystore2);

const blockNumber = await ethers.getBlockNumber();

console.log(blockNumber);

console.log(await ethers.listHistory(chainConfig.defaultCoinbase));
