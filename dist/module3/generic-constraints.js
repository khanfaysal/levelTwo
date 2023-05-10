"use strict";
// spread operator
const myInfoMyInfoTypeConstrains = {
    name: 'faysal khan',
    age: 23,
    salary: 100000,
    other1: false,
    other2: null
};
const addMeToCrushMindMyInfoTypeConstrains = (myInfoMyInfoTypeConstrains) => {
    const crush = 'salua';
    const newData = Object.assign(Object.assign({}, myInfoMyInfoTypeConstrains), { crush });
    return newData;
};
const resultCrushAddMyInfoTypeConstrains = addMeToCrushMindMyInfoTypeConstrains(myInfoMyInfoTypeConstrains);
console.log('spread operator used in generic', resultCrushAddMyInfoTypeConstrains);
