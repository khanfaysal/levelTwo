// arrow function in generic 

const createFunctionArray = (param: string): string[] => {
    return [param];
}
const createFunctionArray1 = <T>(param: T): T[] => {
    return [param];
}
// convert to tuple arrow function
const createFunctionArrayTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
}
// convert to tuple normal function
function createFunctionArrayTupleNormal<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
}

const result = createFunctionArrayTuple<string, string>('Bangladesh', 'love');
const result2 = createFunctionArrayTuple<boolean, Array<string>>(true, ['USA']);
console.log(result2)

// 
type Name = { name: string }
const result3 = createFunctionArray1<Name>({ name: 'Bangladesh' });

// spread operator

type MyInfoType = {
    name: string,
    age: number,
    salary: number
}

const myInfo: MyInfoType = {
    name: 'faysal khan',
    age: 23,
    salary: 100000
};
// const newData = { ...myInfo, crush }
const addMeToCrushMind = <T>(myInfo: T) => {

    const crush = 'salua';
    const newData = { ...myInfo, crush };
    return newData;
}
const resultCrushAdd = addMeToCrushMind(myInfo);
console.log('spread operator used in generic', resultCrushAdd);


