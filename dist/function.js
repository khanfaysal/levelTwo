"use strict";
// normal function
// Default parameter
function add(num1 = 10, num2) {
    return num1 + num2;
}
add(20, 2);
// spread operator
const myFriends = ['tuku', 'altaf', 'jahir', 'pintu'];
const newFriends = ['rosni', 'moriom'];
myFriends.push(...newFriends);
// console.log(myFriends);
// rest operator
const greetFriends = (...frineds) => {
    frineds.forEach(friend => console.log(`Hi dear ${friend}`));
};
greetFriends('lala', 'kala', 'mala', 'jala');
// arrow function
const addArrow = (num1, num2) => num1 + num2;
// map
const NumberArr = [2, 4, 5];
const NumberArrMap = NumberArr.map((elem) => elem * elem);
// function added into another function as a method by this method. As method not implement in arrow function so we use normal function
const person = {
    name: 'faysal',
    balance: 5,
    addBalance(money) {
        console.log(`My new balance is ${this.balance + money}`);
    }
};
// person.addBalance(44);
// function signature by sumit saha added here to compare mezba bhai example
let addNumber;
addNumber = (a, b) => {
    return a + b;
};
const addNumberR = addNumber(4, 6);
console.log(`This is added Number: ${addNumberR}`);
let calculationN;
calculationN = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    else if (c === 'subtract') {
        return a - b;
    }
    else if (c === 'multiply') {
        return a * b;
    }
    else {
        return (a * b) / 2;
    }
};
console.log(calculationN(4, 6, 'subtract'));
