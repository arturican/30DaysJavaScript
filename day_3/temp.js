let firstName = 'Artur';
let lastName = 'Moskvichev';
let country = 'Russia';
let city = 'Kazan';
let age = 28;
let isMarried = false;
let year = 2022;
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

console.log(typeof('10') == typeof(10));
console.log(parseInt('9,8') == 10);
console.log("python".length !== "jargon".length);

let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());