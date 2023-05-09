// example

let assertionVariable: any;

assertionVariable = 'Hello mama';

(assertionVariable as string).length;
// alternative
<string>assertionVariable.length;



// another example

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted value is : ${value} gram`;
    }

    if (typeof param === 'number') {
        const value = param * 1000;
        return `The converted value is : ${value} gram`;
    }

}

// const resultToNumber = kgToGram(1000) as number;
// const resultToString = kgToGram('1000') as string;
// alternative
const resultToNumber = <number>kgToGram(1000);
const resultToString = <string>kgToGram('1000');
console.log(resultToString)
console.log(resultToNumber)


// another example

type CustomErrorType = {
    message: string;
}

try {

} catch (error) {
    // console.log((error as CustomError).message)
    // alternative
    console.log((<CustomErrorType>error).message)

}