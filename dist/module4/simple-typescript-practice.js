"use strict";
// 1. Convert the following JavaScript array into a TypeScript tuple
const userInfo = [101, "Ema", "John", true, , "2023"];
// console.log("user tuple", userInfo);
// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 4, 6, 8];
const filterNumberArray = (firstArray, secondArray) => {
    const newArray = [];
    for (const element of firstArray) {
        if (secondArray.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
};
const filterNumberArrResult = filterNumberArray(firstArray, secondArray);
// console.log(filterNumberArrResult);
// alternative solution of problem no 3
let arr1 = [3, 6, 88, 6, 4];
let arr2 = [4, 5, 6, 9, 7];
function commonNumers(arr1, arr2) {
    let arr1Set = new Set(arr1);
    const commonNumbersResult = arr2.filter(num => arr1Set.has(num));
    // console.log(commonNumbersResult);
}
commonNumers(arr1, arr2);
const productArray = [
    {
        productId: 233,
        productName: "samsung",
        productPrice: 230000,
        productCategory: "laptop",
    },
    {
        productId: 111,
        productName: "Xaomi",
        productPrice: 232,
        productCategory: "mobile",
    },
    {
        productId: 23,
        productName: "HTC",
        productPrice: 200000,
        productCategory: "mobile",
    },
];
function FilterCriteraProducts(productArray, criteria, value) {
    return productArray.filter((productSingle) => productSingle[criteria] === value);
}
const filteredProducts = FilterCriteraProducts(productArray, "productCategory", "mobile");
const personsData = [
    {
        name: 'fay',
        age: 4,
        email: 'fay@gmial.com'
    },
    {
        name: 'jay',
        age: 42,
        email: 'jay@gmial.com'
    },
    {
        name: 'ray',
        age: 14,
        email: 'ray@gmail.com'
    }
];
function personInfo(email) {
    var _a;
    return (_a = personsData.find(emailData => emailData.email === email)) !== null && _a !== void 0 ? _a : null;
}
const personEmailMatch = personInfo('ray@gmail.com');
console.log('person email', personEmailMatch);
// 7.Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
let max = 0;
let min = 0;
const arrNumbers = [2, 4, 56, 6, 9, 0, 3434, -1];
const minMaxArrValue = (...x) => {
    min = Math.min(...x);
    max = Math.max(...x);
};
minMaxArrValue(...arrNumbers);
function caseLetter(color, condition) {
    const letter = condition ? color.toUpperCase() : color.toLowerCase();
    // console.log(letter);
}
caseLetter('red', true);
