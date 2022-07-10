import { ethers } from 'ethers';

export class Ethers {

    private provider: ethers.providers.JsonRpcProvider;

    constructor(chainUrl: string) {
        this.provider = new ethers.providers.JsonRpcProvider(chainUrl);
    }

    listAccounts(): Promise<string[]> {
        return this.provider.listAccounts();
    }
}