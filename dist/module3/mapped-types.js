"use strict";
// two way declare array type first example use generic type and second one type literal pattern use
const arrayOfNumbersGeneric = [1, 4, 5, 6];
const arrayOfNumbersLiteral = [1, 4, 5, 6];
const arrayOfStrings = arrayOfNumbersLiteral.map(number => number.toString());
console.log(arrayOfStrings);
const area1 = { height: 10, weight: 30 };
const rectangularArea = {
    height: 4,
    weight: 32
};
// const obj = {
//     name: 'faysal'
// }
// obj['name']
