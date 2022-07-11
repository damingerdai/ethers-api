module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', //节点地址，如果私有链一般是本机
      port: 8545,  //节点rpc端口
      network_id: '10' // 自定义网络号
    }
  },
  rinkeby: {
    host: "localhost", 
    port: 8545, 
    from: "0x33ec67DBfA1eC16A8C4bB68620ba48acC717Aec7", // default address to use for any transaction Truffle makes during migrations
    network_id: 10,
    gas: 4612388 // Gas limit used for deploys
  },
  compilers: {
    solc: {
      version: "0.8.15",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
