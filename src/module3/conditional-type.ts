// a type is dependent on another

type a1 = number;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;

// nested conditional type
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;


// condition type another example

// check korbe ai sheikh type a wife1 property ase kina ? true : false
type Sheikh = {

    wife1: string;
    wife2: string;
}

type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife1 = CheckProperty<Sheikh, 'wife1'>

// type literal example in typescript

type girlFriends = 'anika' | 'monika' | 'konika'; //string literal

type removeGirlFriend<T, U> = T extends U ? never : T;

type currentGirlFriend = removeGirlFriend<girlFriends, 'konika'>
