# Ethers Api

## Geth

create a private network blockchain:

```bash
geth init --datadir . genesis.json 
```

run the private network blockchain:

```bash
geth --networkid 10 --nodiscover --http --http.addr "0.0.0.0" --http.port 8545 --http.api personal,eth,net,web3  --allow-insecure-unlock --datadir . console
```

create a new accounts

```bash
personal.newAccount()
Passphrase:12345
# accounts: 0x33ec67dbfa1ec16a8c4bb68620ba48acc717aec7
```

show balance

```bash
eth.getBalance(eth.accounts[0])
```

mining!!!

```
miner.start(3)
```

stop mining:

```
miner.stop()
```

## Ganache 

setup ganache:

```shell 
npm install ganache --global
```

run ganache:

```shell
ganache

ganache v7.3.2 (@ganache/cli: 0.4.2, @ganache/core: 0.4.2)
Starting RPC server

Available Accounts
==================
(0) 0xa90127E5627E4a46f84693B254172D2EFB4dcB75 (1000 ETH)
(1) 0x545c3061e935FDb45DC7CF2fca2Ed34872061bF8 (1000 ETH)
(2) 0xA427D1234295ff9275308C85a6293e996aE76071 (1000 ETH)
(3) 0x542391B8Bd9B9FAF8Da21cb13545f61B5d9485e4 (1000 ETH)
(4) 0x3Bbd8bF0Abad0Df3d3407124A96eCd0Ddc2BA21E (1000 ETH)
(5) 0xb72D00F9aA83083d9C7c143246e6068bc2F1652E (1000 ETH)
(6) 0x0b072D4b3a929d8dd4613826f193f0E87DF7209d (1000 ETH)
(7) 0x8A91fad2C10F0A7d1A3e67cE4932568F77f9D026 (1000 ETH)
(8) 0xBd00c02E9f2D773DeCC2b68023A15A1278Fa08a0 (1000 ETH)
(9) 0x8e188e956709D18E673c5051e960D44787d0FcdC (1000 ETH)

Private Keys
==================
(0) 0xbfa4c4307c68d848772a09df2d29579ec699c5ee130d6fdc3974f78e7d64de32
(1) 0xab54834a51fd0f3f5ba58ad3315b9f7d8681f47be675de9e10737e71e7bd8ac0
(2) 0x947ede2e650d3e31eb231adb779f3bf06d33f8542c930bad461f4cc846da85dc
(3) 0x5e2c105e5bef1ec301729ebb3cf305fe3e3a1c054721e85b3707c5ce5d23fed9
(4) 0xcb9e8516484ae734b9679ef17b1d378cfcb060836ec4e30b391d355f2adb5d01
(5) 0x8ece04d60ef6a7ee91443e0412f4fda750f1ee9bfc097243909d4501367cfb1c
(6) 0x4e5b3302507a2ec7af98644d551dfd6dab8af7593187e2e6ba05cc3cb2409963
(7) 0x797e84097763992d4d2284e1b41fa3b78dd83ff5a9f555b7bf8ed2a4fa376635
(8) 0x90170b1553a414cdee42627d04b79377fe80482d7fe563b236b2688d436f820f
(9) 0x8fc6d2857408d29d8c5642260f479be08a3e329e8136ade3f5bf8990f5269735

HD Wallet
==================
Mnemonic:      consider canvas slice current electric medal mimic ketchup talent huge youth east
Base HD Path:  m/44'/60'/0'/0/{account_index}

Default Gas Price
==================
2000000000

BlockGas Limit
==================
30000000

Call Gas Limit
==================
50000000

Chain Id
==================
1337

RPC Listening on 127.0.0.1:8545
```

migrate

```
yarn truffle:migrate


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      1658116177917
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x4eab5c6fbb570bc32afe576a132ed9dcdf2e0aabf2f397fff3462ef3115d36be
   > Blocks: 0            Seconds: 0
   > contract address:    0x776cf8CB4d9dA560420c7B1B47683e52b268a260
   > block number:        1
   > block timestamp:     1658116436
   > account:             0xa90127E5627E4a46f84693B254172D2EFB4dcB75
   > balance:             999.99915573025
   > gas used:            250154 (0x3d12a)
   > gas price:           3.375 gwei
   > value sent:          0 ETH
   > total cost:          0.00084426975 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:       0.00084426975 ETH


2_coin.js
=========

   Deploying 'Coin'
   ----------------
   > transaction hash:    0x84bd04a555a795b4d6d6e08f3dac0f5766642203bae05a971f45b1e911d17924
   > Blocks: 0            Seconds: 0
   > contract address:    0xcb6D55695e90d40F2Ef2B686545a126CA5dE7cB7
   > block number:        3
   > block timestamp:     1658116436
   > account:             0xa90127E5627E4a46f84693B254172D2EFB4dcB75
   > balance:             999.997693460475221891
   > gas used:            413723 (0x6501b)
   > gas price:           3.171811543 gwei
   > value sent:          0 ETH
   > total cost:          0.001312251387004589 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.001312251387004589 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.002156521137004589 ETH
```

console

```shellscript
truffle console
```