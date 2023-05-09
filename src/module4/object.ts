// class declare and show output in console log in traditional way

// class animal {

//     public name: string;
//     public species: string;
//     public sound: string;


//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }

//     public animalDescription() {

//         console.log(`${this.name} is ${this.species} animal. And they are create ${this.sound} sound`);
//     }

// }

// // instance crete single or multiple
// let animalDescriptionResult = new animal('Dog', 'Canis lupus', 'Geu Geu');
// let animalDescriptionResult1 = new animal('Cat', 'Felis catus', 'Geu Geu');

// animalDescriptionResult.animalDescription();


// class declare and show output in console log in parameter property way (short way)

class animal {

    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties
    constructor(public name: string, public species: string, public sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    public animalDescription() {

        console.log(`${this.name} is ${this.species} animal. And they are create ${this.sound} sound`);
    }

}

// instance crete single or multiple
let animalDescriptionResult = new animal('Dog', 'Canis lupus', 'Geu Geu');
let animalDescriptionResult1 = new animal('Cat', 'Felis catus', 'Geu Geu');

animalDescriptionResult.animalDescription()