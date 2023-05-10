"use strict";
// arrow function in generic 
const createFunctionArray = (param) => {
    return [param];
};
const createFunctionArray1 = (param) => {
    return [param];
};
// convert to tuple arrow function
const createFunctionArrayTuple = (param1, param2) => {
    return [param1, param2];
};
// convert to tuple normal function
function createFunctionArrayTupleNormal(param1, param2) {
    return [param1, param2];
}
const result = createFunctionArrayTuple('Bangladesh', 'love');
const result2 = createFunctionArrayTuple(true, ['USA']);
console.log(result2);
const result3 = createFunctionArray1({ name: 'Bangladesh' });
const myInfo = {
    name: 'faysal khan',
    age: 23,
    salary: 100000
};
// const newData = { ...myInfo, crush }
const addMeToCrushMind = (myInfo) => {
    const crush = 'salua';
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const resultCrushAdd = addMeToCrushMind(myInfo);
console.log('spread operator used in generic', resultCrushAdd);
