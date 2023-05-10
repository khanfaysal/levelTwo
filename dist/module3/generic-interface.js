"use strict";
// create generic interface
const crushOne = {
    name: 'mila',
    husband: true,
    wife: 'balia'
};
const crushTwo = {
    name: 'mila',
    husband: 'faysal'
};
const crushThree = {
    name: 'mila',
    husband: {
        name: 'faysal khan',
        salary: 100000
    }
};
const crushFourth = {
    name: 'liial',
    husband: {
        name: 'faysal',
        salary: 400000
    },
    wife: {
        name: 'liiial small',
        salary: 40
    }
};
// // create generic tuple
// type genericTuple<X, Y> = [X, Y]
// const relation: genericTuple<string, string> = ['faysal', 'mimi'];
// // common type
// // type alias
// // type RelationWithSalaryType = { name: string, salary: number }
// // we use also type interface
// interface RelationWithSalaryTypeInterface {
//     name: string,
//     salary: number
// }
// // N.B not best practice for create genericTuple because here declare any type of object
// const relationWithSalary: genericTuple<RelationWithSalaryTypeInterface, string> = [{
//     name: 'faysal',
//     salary: 40000
// },
//     'mimi'
// ]
// // N.B best practice because it's define object type
// const relationWithSalary1: genericTuple<RelationWithSalaryTypeInterface, string> = [{
//     name: 'faysal',
//     salary: 40000
// },
//     'mimi'
// ]
// // create generic array
// type genericArray<T> = Array<T>;
// // generic use case of single another array data type
// const fruitListNumber: genericArray<number> = [1, 4, 5];
// const fruitListNumber1: genericArray<string> = ['one', 'two', 'three'];
// const isTrueStory: genericArray<boolean> = [true, false];
// // generic use case of object
// type FruitType = { name: string, color: string, weight: number };
// const fruitDescription: genericArray<FruitType> = [
//     {
//         name: 'jackfruit',
//         color: 'yellow',
//         weight: 4
//     },
//     {
//         name: 'orange',
//         color: 'green',
//         weight: 1
//     }
// ]
