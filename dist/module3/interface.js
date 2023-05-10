"use strict";
// alias use object
const userInfoAlias = {
    name: 'faysal khan',
    age: 24
};
console.log(userInfoAlias.name);
// interface use object
const userInfoInterface = {
    name: 'Rifat khan',
    age: 23
};
console.log(userInfoInterface.name);
// interface extend object
const userInfoExtendInterface = {
    name: 'junu khann',
    age: 34,
    role: 5
};
console.log(`${userInfoExtendInterface.name} role is ${userInfoExtendInterface.role}`);
// alias extend object
const userInfoAliasExtend = {
    name: 'faysal khan',
    age: 3,
    isMarried: false
};
console.log(`${userInfoAliasExtend.name} married status is ${userInfoAliasExtend.isMarried}`);
const employeer = {
    name: 'rafi',
    age: 4,
    jobTitle: 'Web Engineer'
};
console.log(`${employeer.name} is a ${employeer.jobTitle}`);
const addNumberTwoAlias = (num1, num2) => num1 + num2;
console.log(addNumberTwoAlias(4, 6));
const addNumberTwoInterface = (num1, num2) => num1 + num2;
console.log(addNumberTwoInterface(10, 6));
const rollNumberType = [1, 5, 6, 9];
console.log(rollNumberType);
const rollNumberInterfaceType = ['4', '6', '7']; //[index]
console.log(rollNumberInterfaceType);
