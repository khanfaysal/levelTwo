type PersonInfoConstraintsKey = {
    PersonName: string;
    PersonAge: number;
    PersonSalary: number;
}

type newType = 'PersonName' | 'PersonAge' | 'PersonSalary';

type newTypeKeyOf = keyof PersonInfoConstraintsKey;

const b: newType = 'PersonAge'
const a: newTypeKeyOf = 'PersonName';
console.log(b);

//

function getPropertyConstraintsKey<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}

const property = getPropertyConstraintsKey({ name: 'Rala', age: 500 }, 'age')
// ({ name: 'Mr.X', age: 4 }, 'age')
// const constraintKey = {
//     name: 'Rala',
//     age: 100
// }
// constraintKey['name']