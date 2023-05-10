"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance() {
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
}
class studentAccount extends BankAccount {
    test() {
        this.id;
    }
}
const myAccount = new BankAccount(545, 'faysal', 400);
// myAccount.balance = 0;
console.log(myAccount);
