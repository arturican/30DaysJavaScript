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
dog.bark = function () {
  return 'woof woof';
};

//4.Get name, legs, color, age and bark value from the dog object

console.log(dog.bark(), dog);

//5.Set new properties the dog object: breed, getDogInfo

dog.breed = 'mongrel';
dog.getDogInfo = function () {
  return `I am ${this.name}. I have ${this.legs} legs. I am a ${this.color} light. I am ${this.age} old.
I am a ${this.breed}.`;
};

console.log(dog.getDogInfo());
