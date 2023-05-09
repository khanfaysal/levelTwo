// alias type
type UserAlias = {
    name: string;
    age: number;

}



// alias extend type
type AliasExtend = UserAlias & {
    isMarried: boolean;
}



// interface type
interface IUserInterface {
    name: string;
    age: number;
}



// interface extend type
interface IUserInterfaceExtend extends IUserInterface {
    role: number;
}



// alias use object
const userInfoAlias: UserAlias = {
    name: 'faysal khan',
    age: 24
}

console.log(userInfoAlias.name);



// interface use object
const userInfoInterface: IUserInterface = {
    name: 'Rifat khan',
    age: 23
}
console.log(userInfoInterface.name);



// interface extend object
const userInfoExtendInterface: IUserInterfaceExtend = {
    name: 'junu khann',
    age: 34,
    role: 5
}
console.log(`${userInfoExtendInterface.name} role is ${userInfoExtendInterface.role}`);




// alias extend object
const userInfoAliasExtend: AliasExtend = {
    name: 'faysal khan',
    age: 3,
    isMarried: false
}

console.log(`${userInfoAliasExtend.name} married status is ${userInfoAliasExtend.isMarried}`);



// another example of extend alias
type Person = {
    name: string;
    age: number;
}
type Employee = Person & {
    jobTitle: string;
}
const employeer: Employee = {
    name: 'rafi',
    age: 4,
    jobTitle: 'Web Engineer'
}

console.log(`${employeer.name} is a ${employeer.jobTitle}`);


// type alias function signature
type addNumberTwoAliasSignature = (num1: number, num2: number) => number

const addNumberTwoAlias: addNumberTwoAliasSignature = (num1, num2) => num1 + num2;
console.log(addNumberTwoAlias(4, 6));

// type interface function signature
interface addNumberTwoInterfaceSignature {
    (num1: number, num2: number): number
}

const addNumberTwoInterface: addNumberTwoInterfaceSignature = (num1, num2) => num1 + num2;
console.log(addNumberTwoInterface(10, 6))


// type alias array signature
type rollNumberTypeAlias = number[];
const rollNumberType: rollNumberTypeAlias = [1, 5, 6, 9];
console.log(rollNumberType)

// type interface array signature
interface rollNumberTypeInterface {
    [index: number]: string
}
const rollNumberInterfaceType: rollNumberTypeInterface = ['4', '6', '7'] //[index]
console.log(rollNumberInterfaceType)