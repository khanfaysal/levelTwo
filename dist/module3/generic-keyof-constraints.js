"use strict";
const b = 'PersonAge';
const a = 'PersonName';
console.log(b);
//
function getPropertyConstraintsKey(obj, key) {
    obj[key];
}
const property = getPropertyConstraintsKey({ name: 'Rala', age: 500 }, 'age');
// ({ name: 'Mr.X', age: 4 }, 'age')
// const constraintKey = {
//     name: 'Rala',
//     age: 100
// }
// constraintKey['name']
