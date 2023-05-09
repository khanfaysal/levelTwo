type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string,
//     experience: number,
//     expertise: string
// };

type JuniorDeveloper = NoobDeveloper & {
    name: string,
    experience: number,
    expertise: string
};

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: 'junior' | 'mid' | 'senior';
};


const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Faysal khan',
    expertise: 'javaScript',
    experience: 6,
};

const developer: NextLevelDeveloper = {
    name: 'Next Bhai',
    experience: 4,
    expertise: 'TypeScript',
    leadershipExperience: 4,
    level: 'mid'
}

