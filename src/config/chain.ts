export interface IChainConfig {
  nodeAddr: string;
  gethPort: number;
  defaultCoinbase: string;
}

export const chainConfig: IChainConfig = {
  nodeAddr: process.env.CHAIN_HOST ?? 'localhost',
  gethPort: process.env.CHAIN_PORT ? parseInt(process.env.CHAIN_PORT, 10) : 8545,
  defaultCoinbase: process.env.CHAIN_COINBASE ?? '',
};
