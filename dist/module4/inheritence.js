"use strict";
// common class
class PersonClass {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `${this.name} is taking ${hours} sleep`;
    }
}
class Student extends PersonClass {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('faysal', 23, 'barisal');
class Teacher extends PersonClass {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation; //different
    }
    takeClasses(numberOfClasses) {
        return `${this.name} is good teacher and he takes ${numberOfClasses} classes`;
    }
}
const teacher1 = new Teacher('Mr.Nara', 55, 'Dhaka', 'professor');
