require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food finger dash sad host harvest light army genre'; 
let testAccounts = [
"0x91f6259a3049b3bc24f7f455159231d2c518816dfa70660d5007c43e77005f3c",
"0xce9b03e154e265ae005779a573173d0c9a0a002862b55d91b3316117cca195c8",
"0xa8d40e7b7ff07df6f3c1bf35fb0587d873b368a8f84c1f9f56216078d8a26428",
"0x1f3dfb517d83d86049d2d00eb970a76dad47fad2f5d81cb9d4fdcb321bd4abef",
"0x918c1b7753cfd9c0697526a195be793c5c470b1771e838a41a057a81983463bd",
"0xa255ba3e6113a9ada685db5e98eacc06aad9770ab3666b5f8a40bd5d3b4a2746",
"0x96794681d2ad924b0402015169c09923edaedbc35c4c15c4de7508b5bb1cba86",
"0xa642219cda3723250828375086033548d7784ef2a5aa9d00d4cfdfc21544eb72",
"0x9bba1656891a0bf5d32d609f7426c9474c408111c842f147b7ff532c2537234b",
"0x26d43ce0d576c2e47b1e394a5c0d2c51e93c175983011ea407cbe67d323737f1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


