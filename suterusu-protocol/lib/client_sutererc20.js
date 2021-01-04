
const ClientBase = require('./client_base.js');

class ClientSuterERC20 extends ClientBase {
    
    constructor(web3, suter, home, erc20Token) {
        super(web3, suter, home);
        if (erc20Token === undefined)
            throw "4th arg should be an ERC20 contract.";
        
        console.log("ERC20 contract: " + erc20Token.options.address);

        this.erc20Token = erc20Token;
    }

    async deposit (value) {
        var that = this;
        that.checkRegistered();
        that.checkValue();
        var account = that.account;
        console.log("Initiating deposit: value of " + value + " units (" + value * that.unit + " tokens)");
        await that.erc20Token.methods.approve(that.suter.options.address, value * that.unit)
                .send({from: that.home, gas: that.gasLimit})
                .on('error', (error) => {
                    if(error.code !== ''){
                        console.log("Approve failed: " + error.message);
                        throw error;
                      }else{
                        console.log("Approve failed: " + error);
                        throw new Error(error);
                      }
                });

        console.log("ERC20 tokens approved. Start deposit...");

        let transaction = that.suter.methods.fund(account.publicKeySerialized(), value)
            .send({from: that.home, gas: that.gasLimit})
            .on('transactionHash', (hash) => {
                console.log("Deposit submitted (txHash = \"" + hash + "\").");
            })
            .on('receipt', async (receipt) => {
                account._state = await account.update();
                account._state.pending += value;
                console.log("Deposit of " + value + " was successful (uses gas: " + receipt["gasUsed"] + ")");  
                console.log("Account state: available = ", that.account.available(), ", pending = ", that.account.pending(), ", lastRollOver = ", that.account.lastRollOver());
            })
            .on('error', (error) => {
                if(error.code !== ''){
                  console.log("Deposit failed: " + error.message);
                  throw error;
                }else{
                  console.log("Deposit failed: " + error);
                  throw new Error(error);
                }
            });
        return transaction;
    }

}

module.exports = ClientSuterERC20;
