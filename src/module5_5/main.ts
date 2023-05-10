// import {addNumberTest as addTwoSum, subtractTest} from './module'; //as keyword => alias use
import * as Methods from './module' //all export together from star symbol
import average from './module' //export default import

const addNumberTest = (num1: number,num2: number, num3: number): number => {
    return num1 + num2 + num3;
}
const res = Methods.addNumberTest(4,6);
const res1 = Methods.subtractTest(10,5);
const res3 = Methods.divideTest(4 / 5);
// const res4 = Methods.multiplyTest(6 * 7);

const averageRes = average(3,5)
