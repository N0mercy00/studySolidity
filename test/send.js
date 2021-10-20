module.exports = function(callback) {
    web3.eth.getAccounts().then((accounts, error) => {
        web3.eth.sendTransaction({
            from:accounts[9],
            to: "0x16c0994FB574467FbD8C233788E27431c0790C44",
            value:web3.utils.toWei("30", "ether")}, callback());
    });
}