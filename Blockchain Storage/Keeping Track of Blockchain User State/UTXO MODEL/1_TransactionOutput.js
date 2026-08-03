// Goal: Create a TXO class
// Let's complete the constructor and spend methods for the TXO class in the TXO.js file.
// The constructor should store the values passed into it on properties of the same name. It should also create a property spent and default it to false.
// The spend function should set the spent property to true. For example:
// const txo = new TXO("1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM", 10);
// console.log( txo.owner ); // 1FNv3tXLkejPBYxDHDaZz6ENNz3zn3G4GM
// console.log( txo.amount ); // 10
// console.log( txo.spent ); // false
// txo.spend();
// console.log( txo.spent ); // true
//  Notice how spent is initially false when we create the new TXO. After invoking the spend function, spent should be set to true.




class TXO {
    constructor(owner, amount) {
       this.owner = owner;
       this.amount = amount;
       this.spent = false; 
    }
    spend() {
        this.spent = true;
    }
}

module.exports = TXO;

