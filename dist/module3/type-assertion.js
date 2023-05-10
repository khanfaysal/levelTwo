"use strict";
// example
let assertionVariable;
assertionVariable = 'Hello mama';
assertionVariable.length;
// alternative
assertionVariable.length;
// another example
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted value is : ${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return `The converted value is : ${value} gram`;
    }
}
// const resultToNumber = kgToGram(1000) as number;
// const resultToString = kgToGram('1000') as string;
// alternative
const resultToNumber = kgToGram(1000);
const resultToString = kgToGram('1000');
console.log(resultToString);
console.log(resultToNumber);
try {
}
catch (error) {
    // console.log((error as CustomError).message)
    // alternative
    console.log(error.message);
}
