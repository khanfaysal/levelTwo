
// common class

class PersonClass {

    name: string;
    age: number;
    address: string;


    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours: number): string {
        return `${this.name} is taking ${hours} sleep`;
    }
}


class Student extends PersonClass {

    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }

}

const student1 = new Student('faysal', 23, 'barisal');


class Teacher extends PersonClass {

    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation; //different

    }

    takeClasses(numberOfClasses: number): string { //different
        return `${this.name} is good teacher and he takes ${numberOfClasses} classes`
    }

}

const teacher1 = new Teacher('Mr.Nara', 55, 'Dhaka', 'professor');



