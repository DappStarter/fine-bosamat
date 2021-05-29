require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food cheap rifle mad promote injury light army giant'; 
let testAccounts = [
"0x27e7d41c9a21e5df66b081aa1de7c7097e6785540c2226b409cdbf53a44576eb",
"0xf1f9ade63f5eab9c090c50e40eb00177c5f0cc9ae001fced5442d951469ae10f",
"0xa5a05180a1af4a2ff27ccab0bcab2f0bdf4b0d9e015fc4762986173aadc7f1af",
"0xc1f621d47f46927b466117f4fa57387b5b80f69ac6096971c20460188194a9b1",
"0x63bab96c43e357c6b8a04bacab052b5db1c04914e156eb7ebd8a05b934d41a1a",
"0xad255db07ccd8c9ed2514a24af9f6338190ca117ce75292715cfc81510397797",
"0x9be933fdd209a09fa6d982a4745d05a2fcece3c7757976867dacb5bc25561820",
"0x1b3da5674cd9a197c135a7348158fa3b8168f1e3b1f2d8640fff4878148bc97f",
"0xdf18061bc81cb0e0962f8704811534259e6d3925185828e128893fcf33a8f791",
"0x7be651871ce4935df21eafbf784639ce7103b03b6e93ba84948150bbae10a227"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

