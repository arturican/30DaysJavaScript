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

const personAccount = {};
let m = 0;
personAccount.firstName = 'Ivan';
personAccount.lastName = 'Ivanov';
personAccount.incomes = {};
personAccount.incomes.money = [];
personAccount.incomes.description = [];
personAccount.expenses = {};
personAccount.expenses.money = [];
personAccount.expenses.description = [];
personAccount.accountInfo = 'arturican';
personAccount.addIncome = function(money, description) {
    personAccount.incomes.money.push(money)
    personAccount.incomes.description.push(description);
};
personAccount.addExpense = function(money, description) {
    personAccount.expenses.money.push(money);
    personAccount.expenses.description.push(description);
};
personAccount.totalIncomes = function (){
    let count = 0;
    for (i = 0; i < personAccount.incomes.money.length; i++){
         count += personAccount.incomes.money[i];
    }
    return count;
}
personAccount.totalExpense = function () {
    let count = 0;
    for (i = 0; i < personAccount.expenses.money.length; i++){
         count += personAccount.expenses.money[i];
    }
    return count;
};
personAccount.accountBalance = function() {
    return personAccount.totalIncomes() - personAccount.totalExpense()
};
console.log(personAccount);
personAccount.addIncome(10000, 'аванс');
personAccount.addIncome(30000, 'зп');
personAccount.addIncome(10000, 'аренда квартиры');
personAccount.addExpense(1000, 'водка');
personAccount.addExpense(50, 'сыр');
console.log(personAccount.totalIncomes());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

//3.2 **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
//Imagine you are getting the above users collection from a MongoDB database.
//a. Create a function called signUp which allows user to add to the collection.If user exists, inform the user that
// he has already an account.
//b. Create a function called signIn which allows user to sign in to the application

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

const signUp = function (username, password, email) {
  for(i = 0; i < users.length; i++){
      if(users[i].username == username){
          return console.log('Этот аккаунт уже существует');
      } 
  }
  let _id = (Math.random() + 1).toString(36).substring(7);
  for(i = 0; i < users.length; i++){
  if(users[i]._id == _id){
    _id = (Math.random() + 1).toString(36).substring(7);
  }
  }
  const showDateTime = () => {
    const now = new Date();
    const year = now.getFullYear(); // return year
    let month = now.getMonth() + 1; // return month(0 - 11)
    const date = now.getDate(); // return date (1 - 31)
    const hours = now.getHours(); // return number (0 - 23)
    let minutes = now.getMinutes(); // return number (0 -59)
    if (month < 10) {
        month = month.toString().padStart(2, "0");
    }
    if (minutes < 10) {
        minutes = minutes.toString().padStart(2, "0");
    }
    return `${date}/${month}/${year} ${hours}:${minutes}`;
};
let createdAt = showDateTime();



 
 users.push({_id: _id, username: username, email: email, password: password, createdAt: createdAt})
}
signUp('Artur', '1243', 'arturican@gmail.com');
signUp('Arturican', '1243', 'arturican@gmail.com');
