import { ethers } from 'ethers';

export class Ethers {

    private provider: ethers.providers.JsonRpcProvider;

    constructor(chainUrl: string) {
        this.provider = new ethers.providers.JsonRpcProvider(chainUrl);
    }

    listAccounts(): Promise<string[]> {
        return this.provider.listAccounts();
    }

    async getBalance(address: string): Promise<number>{
        // balance is a BigNumber (in wei); format is as a sting (in ether)
        const balance = await this.provider.getBalance(address);
        const etherString = ethers.utils.formatEther(balance);
        return etherString ? parseInt(etherString, 10) : 0;
    }
}