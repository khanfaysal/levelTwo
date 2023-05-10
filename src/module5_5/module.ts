 const addNumberTest = (num1: number, num2:number): number => {
    return num1 + num2;
}

 const subtractTest = (num1: number, num2:number) : number => {
    return num1 - num2;
}

 const multiplyTest = (num1: number, num2: number): number => {
    return num1 * num2;
};

 const divideTest = (num1: number, num2: number): number => {
    return num1 / num2;
};

const averageTest = (num1: number, num2: number): number => {
    return (num1 + num2) /2;
};
// export default averageTest;

// all function or component default export

export default {
    addNumberTest,
    subtractTest,
    multiplyTest,
    divideTest,
    averageTest

};