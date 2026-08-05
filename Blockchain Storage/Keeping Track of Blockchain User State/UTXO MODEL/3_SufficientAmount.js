// Goal: Ensure Sufficient Input
// Let's make sure that the inputUTXOs have enough total value in them to cover the total value of the outputUTXOs.
// If the total value of the inputs is less than the total value of the outputs, throw an error in the execute function.





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
    }
}


