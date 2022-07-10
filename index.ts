import { chainConfig } from './src/config';
import { Ethers } from './src/ethers';
import dotenv from 'dotenv';

dotenv.config();

const chainUrl = 'http://' + chainConfig.nodeAddr + ':' + chainConfig.gethPort;
const ethers = new Ethers(chainUrl);

const accounts = await ethers.listAccounts();

console.log(accounts);