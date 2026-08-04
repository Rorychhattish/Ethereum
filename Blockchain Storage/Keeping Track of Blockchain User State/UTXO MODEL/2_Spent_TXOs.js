// Goal: Ensure Inputs are UTXOs
// On this stage, we introduce a new file Transaction.js.
// In the Transaction constructor you'll see two arguments passed in: inputUTXOs and outputUTXOs. Both of these objects are arrays containing instances of transaction outputs.
// Store inputUTXOs and outputUTXOs on the transaction object.
// In the execute function do one thing for now: ensure that none of the inputUTXOs are already spent. We can't allow double-spending TXOs!
// Throw an error in execute if any input TXO is already spent.
//  The terminology between UTXO and TXO can sometimes get confusing. Remember that a TXO is just the nomenclature for a UTXO that is already spent!





class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        for(let utxo of this.inputUTXOs){
            if(utxo.spent){
                throw new error("UTXO already spent")
            }
        }
    }
}

