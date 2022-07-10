import { ethers } from 'ethers';
import { chainConfig } from './src/config';
import dotenv from 'dotenv';

dotenv.config();

const chainUrl = 'http://' + chainConfig.nodeAddr + ':' + chainConfig.gethPort;
const provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider(chainUrl);

const accounts = await provider.listAccounts();

console.log(accounts);