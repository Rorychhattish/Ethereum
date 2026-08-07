// Goal: Calculate the fee!
// At the end of the execute function, calculate the fee as the sum of all the inputs minus the sum of all the outputs.
// Given that we throw an error if the inputs are insufficient, this number should be at least zero. Any time outputs are less, this should be a positive fee.
// Store the fee amount in a property called fee on the transaction itself.

// For example:
// const iTXO = new TXO(fromAddress, 5);
// const oTXO = new TXO(toAddress, 3);
// const tx = new Transaction([iTXO], [oTXO]);
// tx.execute();
// console.log( tx.fee ); // 2






class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        for (let utxo of this.inputUTXOs) {
            if (utxo.spent) {
                throw new error("UTXO already spent")
            }
        }

        let inputTotal = 0;
        for(let utxo of this.inputUTXOs){
            inputTotal += utxo.amount;
        }

        let outputTotal = 0;
        for (let utxo of this.outputUTXOs){
            outputTotal += utxo.amount;
        }

        if(inputTotal < outputTotal){
            throw new error("Insufficient input value")
        }

        for(let utxo of this.inputUTXOs){
            utxo.spend();
        }

        this.fee = inputTotal - outputTotal;
    }
}
module.exports = Transaction;

