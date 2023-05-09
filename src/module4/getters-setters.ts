class BankAccount1 {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {

        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter

    get balance(): number {
        return this._balance;
    }

    // getBalance1(): number {
    //     return this._balance
    // }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }

    // addDeposit1(amount: number) {
    //     this._balance = this._balance + amount
    // }
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
