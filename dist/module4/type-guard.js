"use strict";
// typeof guard
function add1(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
const addGuard1 = add1(1, 2);
console.log(addGuard1);
const addGurad2 = add1('1', '2');
console.log(addGurad2);
function getUser(user) {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`;
    }
    else {
        return `I am a normal user`;
    }
}
const normalUser1 = { name: 'Mr. X' };
const adminUser1 = { name: 'Mr. Y', role: 'admin' };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
// instanceof guard
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`I am making sound`);
    }
}
class Dog extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeBark() {
        console.log(`I am barking`);
    }
}
class Cat extends Animal {
    constructor(name, species) {
        super(name, species);
    }
    makeMew() {
        console.log(`I am mew mew`);
    }
}
// a function which receive object
// function getAnimal(animal: Animal) {
//     if (animal instanceof Dog) {
//         animal.makeBark();
//     }
//     if (animal instanceof Cat) {
//         animal.makeMew();
//     }
// }
// as a function we also call getAnimal function receive object and create guard also
// for dog
function isDog(animal) {
    return animal instanceof Dog;
}
// for cat
function isCat(animal) {
    return animal instanceof Cat;
}
// a function which receive object
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
}
const Animal1 = new Dog('Mr.Shepar', 'German shaper'); //instance -> for Dog
const Animal2 = new Cat('Mr. UgandaCat', 'Persian'); // instance -> for Cat
getAnimal(Animal2); // I am mew mew
