"use strict";
class BankAccount1 {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter
    get balance() {
        return this._balance;
    }
    // getBalance1(): number {
    //     return this._balance
    // }
    // setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
class studentAccount1 extends BankAccount1 {
    test() {
        // this.id;
    }
}
const myAccount1 = new BankAccount1(545, 'faysal', 40);
// myAccount.balance = 0;
// myAccount1.addDeposit1(20);
// console.log(myAccount1);
console.log(myAccount1.balance);
myAccount1.deposit = 30;
console.log(myAccount1.balance);
