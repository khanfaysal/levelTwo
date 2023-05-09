// two way declare array type first example use generic type and second one type literal pattern use

const arrayOfNumbersGeneric: Array<number> = [1, 4, 5, 6];
const arrayOfNumbersLiteral: number[] = [1, 4, 5, 6];

const arrayOfStrings = arrayOfNumbersLiteral.map(number => number.toString());
console.log(arrayOfStrings)

// type mapp

type Volume = {

    height: number;
    weight: string;
    depth: number;
};

type Area<T> = {
    // [key in keyof Volume]: Volume[key];
    [key in keyof T]: T[key]
};

const area1: Area<{ height: number, weight: number }> = { height: 10, weight: 30 }

// ami chai object r value jeno fixed thake tahole amake readonly type use korte hobe

type AreaReadonly = {
    readonly height: number;
    readonly weight: number;
}

const rectangularArea: AreaReadonly = {
    height: 4,
    weight: 32
}
// rectangularArea.weight = 10;


type A = Volume['height'] //look up type
type B = keyof Volume;

// const obj = {
//     name: 'faysal'
// }
// obj['name']