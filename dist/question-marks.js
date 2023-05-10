"use strict";
var _a, _b;
const age = 10;
// traditional way
// if (age >= 18) {
//     console.log('You are adult')
// } else {
//     console.log('You are child')
// }
// short circuit way
const adultMesure = age ? 'YES adult' : 'NO adult';
console.log(adultMesure);
// Nullish coalescing operator
// note: Default value create or set depend on null or undefined 
const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName1 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName1 });
const Manush1 = {
    name: 'manush',
    age: 23,
    address: {
        city: 'No city',
        road: 'No road'
    }
};
const home = (_b = (_a = Manush1 === null || Manush1 === void 0 ? void 0 : Manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No home';
console.log({ home });
