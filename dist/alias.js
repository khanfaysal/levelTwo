"use strict";
const crush1 = {
    name: 'moyna pakhi',
    age: 21,
};
const crush2 = {
    name: 'taia pakhi',
    age: 25,
};
const crush3 = {
    name: 'dona pakhi',
    age: 20,
};
const isMarried = false;
const courseName = 'level two';
const calculateNumber = (number1, number2, operation) => {
    return operation(number1, number2);
};
const resultNumber = calculateNumber(3, 5, (x, y) => x * y);
// calculateNumber(10, 5, (x, y) => x - y);
console.log(resultNumber);
