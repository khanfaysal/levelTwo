type CrushType = {
    name: string,
    age?: number
}

const crush1: CrushType = {
    name: 'moyna pakhi',
    age: 21,
}
const crush2: CrushType = {
    name: 'taia pakhi',
    age: 25,
}
const crush3: CrushType = {
    name: 'dona pakhi',
    age: 20,
}

// boolean type alias

type CrushMarriedType = boolean;

const isMarried: CrushMarriedType = false;

type CourseType = string;

const courseName: CourseType = 'level two';

// calculate number function with alias

type OperationType = (x: number, y: number) => number

const calculateNumber = (
    number1: number,
    number2: number,
    operation: OperationType) => {
    return operation(number1, number2);
}
const resultNumber = calculateNumber(3, 5, (x, y) => x * y);
// calculateNumber(10, 5, (x, y) => x - y);
console.log(resultNumber)