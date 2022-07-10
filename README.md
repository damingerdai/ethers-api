# Ethers Api

## Geth

create a private network blockchain:

```bash
geth init --datadir . genesis.json 
```

run the private network blockchain:

```bash
geth --networkid 10 --nodiscover --http --http.addr "0.0.0.0" --http.port 8545 --http.api personal,eth,net,web3 --allow-insecure-unlock --datadir . console
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