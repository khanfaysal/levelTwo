// pick

interface IPerson {
    name: string;
    email?: string;
    contactNo: number;
}
type Contact =  Pick<IPerson, 'contactNo' | 'email'>

// omit

type OmitType = Omit<IPerson, 'email'>

// partial => to make all the property to be optional

type partialType = Partial<IPerson>

// required

type requiredProps = Required<IPerson>

// readonly

const personInformation: Readonly <IPerson> = {
    name: 'faysal',
    email: 'faysal@gmail.com',
    contactNo: 3434989
}
console.log(personInformation);
// personInformation.name = 'khan';
console.log(personInformation);

// index signature use to alternative directly use type

// type Obj = {
//     a: string;
//     b: string;
//     c: string
// }

// index signature
// type Obj = {
//     [key: string] : string
// }

// N.B can not literal or generic type in index signature
// type Obj = {
//     [key: 'a' | 'b' | 'c'] : string
// }

// Record
type Obj = Record<string, string>

const obj: Obj = {
    a: 'hi',
    b: 'hello',
    c: '434'
}
console.log(obj)
