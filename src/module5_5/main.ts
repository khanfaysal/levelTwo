// import {addNumberTest as addTwoSum, subtractTest} from './module'; //as keyword => alias use
// import * as Methods from './module' //all export together from star symbol
// import average, {addNumberTest as addNumberTwo, subtractTest, divideTest,multiplyTest} from './module' //export default import with normal export together
// import customNameExport from './module' //all export with one object wrapper

// import from utils folder with isolated file
// import addTwo from './utils/add'
// import subsTwo from './utils/substract'
// import mulTwo from './utils/multiply'
import methods from './utils/index';

const addNumberTest = (num1: number,num2: number, num3: number): number => {
    return num1 + num2 + num3;
}
// const res = Methods.addNumberTest(4,6);
// const res1 = Methods.subtractTest(10,5);
// const res3 = Methods.divideTest(4,5);
// const res4 = Methods.multiplyTest(6,7);
// const res4 = Methods.averageTest(6,7);

// const res = addNumberTwo(4,6);
// const res1 = subtractTest(10,5);
// const res3 = divideTest(4,5);
// const res4 = multiplyTest(6,7);
// const res4 = averageTest(6,7);

// const res = customNameExport.addNumberTest(4,5);
// const res1 = customNameExport.subtractTest(10,5);
// const res3 = customNameExport.divideTest(4,5);
// const res4 = customNameExport.multiplyTest(6,7);
// const res4 = customNameExport.averageTest(6,7);


// const res1 = addTwo(4,6);
// const res2 = subsTwo(4,6);
// const res3 = mulTwo(4,6);

const res1 = methods.addTwo(4,5);
const res2 = methods.subsTwo(4,6);
const res3 = methods.mulTwo(4,6);


