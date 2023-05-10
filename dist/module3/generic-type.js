"use strict";
// create generic tuple
const relation = ['faysal', 'mimi'];
// N.B not best practice for create genericTuple because here declare any type of object
const relationWithSalary = [{
        name: 'faysal',
        salary: 40000
    },
    'mimi'
];
// N.B best practice because it's define object type
const relationWithSalary1 = [{
        name: 'faysal',
        salary: 40000
    },
    'mimi'
];
// generic use case of single another array data type
const fruitListNumber = [1, 4, 5];
const fruitListNumber1 = ['one', 'two', 'three'];
const isTrueStory = [true, false];
const fruitDescription = [
    {
        name: 'jackfruit',
        color: 'yellow',
        weight: 4
    },
    {
        name: 'orange',
        color: 'green',
        weight: 1
    }
];
