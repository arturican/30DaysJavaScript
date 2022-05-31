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

//2.4 Set your name in the users object without modifying the original users object

users.Arhtur = {};

//2.5 Get all keys or properties of users object

const keys = Object.keys(users);

//2.6 Get all the values of users object

const value = Object.values(users);

//2.7  Use the countries object to print a country name, capital, populations and languages

const countries = new Object();
countries['Russia'] = {};
countries['Russia'].name = 'Russian Federation';
countries['Russia'].capital = 'Moscow';
countries['Russia'].populations = 'russian';
countries['Russia'].languages = 'russian';
countries['America'] = {};
countries.America.name = 'United States of America';
countries.America.capital = 'Washington';
countries.America.populations = 'american';
countries.America.languages = 'english';
console.log(countries);

//LEVEL 3
//3.1 Create an object literal called personAccount.
// It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense,
// accountInfo,addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = new Object();
personAccount.firstName = 'Ivan';
personAccount.lastName = 'Ivanov';
personAccount.incomes = {};
personAccount.incomes.money;
personAccount.expenses;

personAccount.totalExpense;
personAccount.accountInfo = 'arturican';
personAccount.addIncome = function(money, description) {

    personAccount.incomes.money: money;
    personAccount.incomes.description: description;

};
personAccount.addExpense = function(money, description) {};
personAccount.accountBalance = function() {};
console.log(personAccount);
personAccount.addIncome(100, 'бухло');
personAccount.addIncome(300, 'бухло');
//personAccount.totalIncome = personAccount.incomes.money;