// spread operator

type MyInfoTypeConstrains = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}

const myInfoMyInfoTypeConstrains: MyInfoTypeConstrains = {
    name: 'faysal khan',
    age: 23,
    salary: 100000,
    other1: false,
    other2: null
};
// const newData = { ...myInfo, crush }

type MandaTory = { name: string, age: number, salary: number }
const addMeToCrushMindMyInfoTypeConstrains = <T extends MandaTory>(myInfoMyInfoTypeConstrains: T) => {

    const crush = 'salua';
    const newData = { ...myInfoMyInfoTypeConstrains, crush };
    return newData;
}
const resultCrushAddMyInfoTypeConstrains = addMeToCrushMindMyInfoTypeConstrains(myInfoMyInfoTypeConstrains);
console.log('spread operator used in generic', resultCrushAddMyInfoTypeConstrains);
