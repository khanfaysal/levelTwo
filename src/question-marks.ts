const age: number = 10;


// traditional way
// if (age >= 18) {
//     console.log('You are adult')
// } else {
//     console.log('You are child')
// }

// short circuit way
const adultMesure = age ? 'YES adult' : 'NO adult';
console.log(adultMesure);

// Nullish coalescing operator

// note: Default value create or set depend on null or undefined 
const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser ?? 'Guest';
const userName1 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName1 });

type Manush = {
    name: string,
    age: number,
    address: {
        city: 'No city',
        road: 'No road',
        home?: ''
    }

}

const Manush1: Manush = {
    name: 'manush',
    age: 23,
    address: {
        city: 'No city',
        road: 'No road'
    }

}
const home = Manush1?.address?.home ?? 'No home';
console.log({ home })
