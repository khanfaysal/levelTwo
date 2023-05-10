import { addNumberTest as addTwoSum, subtractTest } from './module'; //as keyword => alias use
const addNumberTest = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
const res = addTwoSum(4, 6);
const res1 = subtractTest(10, 5);
