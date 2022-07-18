import { ethers } from "ethers";
import { getSalt } from "./salt";
import { IKeystore } from "./domain/ethers";

export class Ethers {
  private provider: ethers.providers.JsonRpcProvider;

  constructor(private chainUrl: string) {
    this.provider = new ethers.providers.JsonRpcProvider(chainUrl);
  }

  async createKeystore(salt?: string): Promise<IKeystore> {
    return this.doCreateKeystore(salt || "");
  }

  private async doCreateKeystore(salt: string): Promise<IKeystore> {
    const wallet = await ethers.Wallet.createRandom();
    const keystore = await wallet.encrypt(salt || "");
    return JSON.parse(keystore) as IKeystore;
  }

  async createAccount(): Promise<string> {
    const salt = await getSalt(8);
    const keystore = await this.doCreateKeystore(salt);
    return this.getAddressFromKeystore(keystore);
  }

  private getAddressFromKeystore(keystore: IKeystore) {
    return `0x${keystore.address}`;
  }

  listAccounts(): Promise<string[]> {
    return this.provider.listAccounts();
  }

  async getBalance(address: string): Promise<number> {
    // balance is a BigNumber (in wei); format is as a sting (in ether)
    const balance = await this.provider.getBalance(address);
    const etherString = ethers.utils.formatEther(balance);
    return etherString ? parseInt(etherString, 10) : 0;
  }

  getBlockNumber() {
    return this.provider.getBlockNumber();
  }

//   async showHistory() {
//    const blockNumbers = await this.provider.getBlockNumber();
//    for (let i = 0; i < blockNumbers; i++) {
//     this.provider.getBlock()
//    }
//   }

  async listHistory(address: string) {
    //this.provider
    const tx = await this.provider.getTransaction(address);
    console.log(tx);
  }
}
