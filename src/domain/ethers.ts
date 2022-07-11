export interface IKeystoreCrypto {
    cipher: string;
    cipherparams: {
        iv: string;
    };
    ciphertext: string;
    kdf: string;
    kdfparams: {
        salt: string;
        n: number;
        dklen: number;
        p: number;
        r: number;
    };
    mac: string;
}

export interface IKeystoreXEthers {
    client: string;
    gethFilename: string;
    mnemonicCounter: string;
    mnemonicCiphertext: string;
    path: string;
    locale: string;
    version: string;
}

export interface IKeystore {
    id: string;
    version: number;
    address: string;
    Crypto: IKeystoreCrypto;
    'x-ethers': IKeystoreXEthers;
}