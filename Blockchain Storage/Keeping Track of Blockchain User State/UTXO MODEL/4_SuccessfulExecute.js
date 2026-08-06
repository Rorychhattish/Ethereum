// Goal: Mark Inputs as Spent
// If no errors are thrown during the execute function of the transaction, then it is successful! 




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
    }
}

