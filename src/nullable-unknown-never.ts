// null example

const searchName = (value: string | null) => {
    if (value === null) {
        console.log('There is nothing to search')
    } else {
        console.log('searching...')
    }
}

searchName(null);


// unknown example


// kmh^-1 => ms^-1
const getMyCarSpeed = (speed: unknown) => {

    if (typeof speed === 'number') {
        const convertSpeed = (speed * 1000) / 3600;
        console.log(`My speed is : ${convertSpeed}`);
    }

    if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ");
        const convertSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed (TEXT) is : ${convertSpeed}`);
    }

    else {
        console.log('There is wrong type')
    }

}
getMyCarSpeed(10);
getMyCarSpeed('10kmh^-1');
getMyCarSpeed(true);


// never type

function throwError(message: string): never {
    throw new Error(message)
}
throwError('There is an error')



// quiz example

function generateAdder(a: number): (b: number) => number {

    return function (b: number) {

        return a + b;

    };

}

const addTwo = generateAdder(2);

// console.log(addTwo(3));

// console.log(addTwo(5));