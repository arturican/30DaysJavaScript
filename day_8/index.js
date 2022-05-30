//1.Create an empty object called dog

const dog = {};

//2.Print the the dog object on the console
console.log(dog);

/*3.Add name, legs, color, age and bark properties for the dog object.
The bark property is a method which return woof woof*/

dog.name = 'Rex';
dog.legs = 4;
dog.color = 'brown';
dog.age = 5;
dog.bark = function() {
    return 'woof woof';
};

//4.Get name, legs, color, age and bark value from the dog object

console.log(dog.bark(), dog);

//5.Set new properties the dog object: breed, getDogInfo

dog.breed = 'mongrel';
dog.getDogInfo = function() {
    return `I am ${this.name}. I have ${this.legs} legs. I am a ${this.color} light. I am ${this.age} old.
I am a ${this.breed}.`;
};

console.log(dog.getDogInfo());

//LEVEL 2


const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },

}

//2.1 Find the person who has many skills in the users object

const findMaxSkills = function() {
    const keys = Object.keys(users);
    const value = Object.values(users);
    const personsSkills = [];
    for (let i = 0; i < value.length; i++) {
        personsSkills.push(value[i].skills.length);
    }
    let maxSkills = Math.max.apply(null, personsSkills);

    function checkPersonSkills(skills) {
        return skills === maxSkills;
    }
    let personMaxSkills = personsSkills.findIndex(checkPersonSkills);
    return keys[personMaxSkills];
}
findMaxSkills();

//2.2 Count logged in users, count users having greater than equal to 50 points from the following object.
const countUsers = function() {
    const countUsers0fObject = Object.keys(users).length;
    return countUsers0fObject;

}
countUsers();

const countUsersPoints = function() {
    const value = Object.values(users);
    let count = 0;
    for (let i = 0; i < value.length; i++) {
        if (value[i].points >= 50)
            count += 1;

    }
    return count;
}
countUsersPoints();

//2.3 Find people who are MERN stack developer from the users object

const findPeopleStackMERN = function() {
    const keys = Object.keys(users);
    const value = Object.values(users);
    person = [];
    for (let i = 0; i < value.length; i++) {
        let str = value[i].skills.join(',');
        if (str.match('MongoDB,Express,React,Node')) {
            person.push(keys[i]);
        }

    }
    return person.join(', ');
}

findPeopleStackMERN();