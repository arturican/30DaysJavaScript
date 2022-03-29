const fullName = (firstName = 'Артур', lastName = 'Москвичёв') => {
  let space = ' ';
  let fullName = firstName + space + lastName;
  return console.log(fullName);
};
fullName('Денис', 'Токарев');

const addNumbers = (firstNumber, secondNumber) => {
  let sum = firstNumber + secondNumber;
  return console.log(sum);
};

addNumbers(1, 2);

const areaOfRectangle = (length, width) => {
  let area = length * width;
  return console.log(area);
};

areaOfRectangle(10, 8);

const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length + width);
  return console.log(perimeter);
};

perimeterOfRectangle(10, 8);

const volumeOfRectPrism = (length, width, heigth) => {
  let volume = length * width * heigth;
  return console.log(volume);
};

volumeOfRectPrism(10, 12, 13);

const areaOfCircle = (radius) => {
  let areaCircle = Math.PI * radius * radius;
  return console.log(areaCircle);
};

areaOfCircle(10);

const lengthOfCircle = (radius) => {
  let lengthCircle = 2 * Math.PI * radius;
  return console.log(lengthCircle);
};

lengthOfCircle(10);

const density = (weight, volume) => {
  let Density = weight / volume;
  return console.log(Density);
};

density(10, 12);

const speed = (distance, time) => {
  let speed = distance / time;
  return console.log(speed);
};

speed(100, 2);

const ITM = (weight, heigth) => {
  let itm = weight / (heigth * heigth);
  if (itm < 18.5) {
    return console.log('Недостаточный вес');
  } 
  
  if (itm <= 24.9) {
    return console.log('Нормальный вес');
  } 
  
  if (itm <= 29.9) {
    return console.log('Избыточный вес');
  } 
  
  return console.log('Ожирение');
};

ITM(180, 108);

const checkSeason = (month) => {
  if (month == 'декабрь' || month == 'январь' || month == 'февраль') {
    return console.log('зима');
  } else if (month == 'март' || month == 'апрель' || month == 'май') {
    return console.log('весна');
  } else if (month == 'июль' || month == 'июнь' || month == 'август') {
    return console.log('лето');
  } else if (month == 'сентябрь' || month == 'октяюбрь' || month == 'ноябрь') {
    return console.log('осень');
  }
};

checkSeason('февраль');

const findMax = (firstNumber, secondNumber, thirdNumber) => {
  if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    return console.log(firstNumber);
  } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    return console.log(secondNumber);
  } else if (thirdNumber >= firstNumber && thirdNumber >= secondNumber) {
    return console.log(thirdNumber);
  }
};

findMax(1, 0, 2);

/*const solveLinEquation = (a, b, c) => {
  let x = (-(b * y) - c) / -a;
  let y = (-a * x - c) / -b;
  return console.log(x, y);
};

solveLinEquation();
*/
const solveQuadratic = (a, b, c) => {
  let D = b * b - 4 * a * c;
  if (D < 0) {
    return console.log('Корней нет');
  } else if (D === 0) {
    return console.log((-b / 2) * a);
  } else if (D > 0) {
    return console.log(((-b + Math.sqrt(D)) / 2) * a, ((-b - Math.sqrt(D)) / 2) * a);
  }
};

solveQuadratic(1, 2, 3);

const printArray = () => {
  let countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
  ];
  for (const element of countries) {
    console.log(element);
  }
};

printArray();

const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear(); // return year
  let month = now.getMonth() + 1; // return month(0 - 11)
  const date = now.getDate(); // return date (1 - 31)
  const hours = now.getHours(); // return number (0 - 23)
  const minutes = now.getMinutes(); // return number (0 -59)
  if (month < 10) {
    month = '0' + month;
  }
  return console.log(`${date}.${month}.${year} ${hours}:${minutes}`);
};

showDateTime();

const swapValues = (x, y) => {
  let a = x;
  let b = y;
  x = b;
  y = a;
  return console.log(x, y);
};

swapValues(1, 2);

let newArr = [];
const reverseArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return console.log(newArr);
};

reverseArray([1, 2]);

const rgbColorGenerator = (count) => {
  let array = [];
  for (let i = 0; i <= count - 1; i++) {
    let str = '';
    for (let j = 0; j <= 2; j++) {
      str += String(Math.floor(Math.random() * 255 + 1)) + ',';
    }
    let str21 = str.substring(0, str.length - 1);
    array.push(str21);
  }
  return console.log(array);
};

const countries1 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
];

const capitalizeArray = (arr) => {
  let array = [];
  for (let i = 0; i <= arr.length; i++) {
    array.push(countries1[i]);
  }
  let str = array.join(',').toLocaleUpperCase();
  array = str.split(',');
  return console.log(array);
};

capitalizeArray(countries1);

const addItem = (item) => {
  let arrayItem = [];
  arrayItem.push(item);
  return console.log(arrayItem);
};

addItem(countries1);

const sumOfNumbers = (number) => {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return console.log(sum);
};

sumOfNumbers(3);

const sumOfOdds = (number) => {
  let sumr = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sumr += i;
    }
  }
  return console.log(sumr);
};

sumOfOdds(10);

const evensAndOdds = (number) => {
  let sumr = 0;
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sumr += 1;
    } else if (i % 2 == 0) {
      sum += 1;
    }
  }
  return console.log(sumr, sum);
};

evensAndOdds(10);

const summ = (...args) => {
  let sum = 0;
  for (const elemts of args) {
    sum += elemts;
  }
  return console.log(sum);
};

summ(10);

const randomMacAddress = () => {
  let arr16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let a = arr16[Math.floor(Math.random() * 15) + 1];
  let b = arr16[Math.floor(Math.random() * 15) + 1];
  let c = arr16[Math.floor(Math.random() * 15) + 1];
  let d = arr16[Math.floor(Math.random() * 15) + 1];
  let e = arr16[Math.floor(Math.random() * 15) + 1];
  let f = arr16[Math.floor(Math.random() * 15) + 1];
  return console.log('#' + `${a}${b}${c}${d}${e}${f}`);
};

randomMacAddress();

rgbColorGenerator(3);

const arrayOfHexaColors = (count) => {
  let hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let array = [];
  for (let i = 0; i <= count - 1; i++) {
    let str = '';
    for (let j = 0; j <= 6; j++) {
      str += hexa[Math.floor(Math.random() * 15 + 1)];
    }
    array.push('#' + str);
  }
  return console.log(array);
};

arrayOfHexaColors(3);

const convertHexaToRgb = (hexa) => {
  let arr = [];
  let str = hexa;
  let str21 = '';
  if (str[0] === '#') {
    for (let i = 1; i <= str.length - 1; i++) {
      str21 += str[i];
    }
  }
  arr = str21.split('');
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[j] === 'a') {
      arr[j] = '10';
    } else if (arr[j] === 'b') {
      arr[j] = '11';
    } else if (arr[j] === 'c') {
      arr[j] = '12';
    } else if (arr[j] === 'd') {
      arr[j] = '13';
    } else if (arr[j] === 'e') {
      arr[j] = '14';
    } else if (arr[j] === 'f') {
      arr[j] = '15';
    }
  }
  let firstNumber = arr.slice(0, 2);
  let secondNumber = arr.slice(2, 4);
  let thirdNumber = arr.slice(4);

  let R = +firstNumber[0] * 16 + +firstNumber[1];
  let G = +secondNumber[0] * 16 + +secondNumber[1];
  let B = +thirdNumber[0] * 16 + +thirdNumber[1];
  return console.log('RGB (' + R + ',' + G + ',' + B + ')');
};

convertHexaToRgb('#41aabb');

const convertRGBtoHex = (rgb) => {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let str = String(rgb);
  arr = str.split(',');
  arr2[0] = Math.floor(+arr[0] / 16);
  arr2[1] = +arr[0] % 16;
  arr2[2] = Math.floor(+arr[1] / 16);
  arr2[3] = +arr[1] % 16;
  arr2[4] = Math.floor(+arr[2] / 16);
  arr2[5] = +arr[2] % 16;

  for (let j = 0; j <= arr2.length - 1; j++) {
    if (arr2[j] === 10) {
      arr2[j] = 'a';
    } else if (arr2[j] === 11) {
      arr2[j] = 'b';
    } else if (arr2[j] === 12) {
      arr2[j] = 'c';
    } else if (arr2[j] === 13) {
      arr2[j] = 'd';
    } else if (arr2[j] === 14) {
      arr2[j] = 'e';
    } else if (arr2[j] === 15) {
      arr2[j] = 'f';
    }
  }
  arr3[0] = String(arr2[0]) + String(arr2[1]) + String(arr2[2]) + String(arr2[3]) + String(arr2[4]) + String(arr2[5]);
  return console.log(arr3);
};

convertRGBtoHex('120, 120, 120');

const generateColors = (numberName, count) => {
  if (numberName == 'hex') {
    arrayOfHexaColors(count);
  } else if (numberName == 'rgb') {
    rgbColorGenerator(count);
  }
};
generateColors('hex', 2);

let arr = [1, 2, 3];
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = array[i];
    let x = Math.floor(Math.random() * (i + 1));
    array[i] = array[x];
    array[x] = j;
  }
  return console.log(arr);
};

shuffleArray(arr);

const factorial = (number) => {
  for (let i = number - 1; i > 0; i--) {
    number *= i;
  }
  return console.log(number);
};

factorial(5);

const isEmpty = (check) => {
  if (check == true) {
    return console.log('Параметр не пустой');
  } else {
    return console.log('Параметр  пустой');
  }
};

isEmpty(1);

const sumAllNumbs = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return console.log(sum);
};

sumAllNumbs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const sumOfArrayItems = (array) => {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i];
    } else {
      return console.log('элемент массива не является числом');
    }
  }
  return console.log(sum);
};

sumOfArrayItems([1, 2, 'хуй', 4, 5]);

const medium = (array) => {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (typeof array[i] === 'number') {
      sum += array[i];
    } else {
      return console.log('элемент массива не является числом');
    }
  }
  return console.log(sum / array.length);
};

medium([1, 2, 'хуй', 4, 5]);

const modifyArray = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array.length - 1 < 4) {
      return console.log('Not Found');
    } else {
      array[4] = array[4].toUpperCase();
    }
  }
  return console.log(array);
};

modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']);

const isPrime = (number) => {
  let a = 0;
  for (let i = 2; i <= number; i++) {
    if (number % i == 0) {
      a += 1;
    }
  }
  console.log(a);
  if (a < 2) {
    return console.log('простое число');
  } else {
    return console.log('Не простое число');
  }
};
isPrime(71);

const isCheckArray = (array) => {
  let newArr = [];
  let count = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    newArr.push(array[i]);
    if (typeof newArr.indexOf(0) == typeof newArr[i]) {
      count += 1;
    }
  }
  if (count === array.length) {
    return console.log('Элементы уникальны');
  } else {
    return console.log('Элементы не уникальны');
  }
};

isCheckArray([1, 'хуй', 3]);

const isValidVariable = (value) => {
  let valid = /_\$|_|\$/g;
  if (value.match(valid)) {
    return console.log('Не допустимая переменная');
  } else {
    return console.log('допустимая переменная');
  }
};

isValidVariable('aa__');

const SevenRandomNumbers = () => {
  let arr = [];
  while (arr.length <= 6) {
    let randomNumber = Math.floor(Math.random() * 9 + 1);
    if (arr.lastIndexOf(randomNumber) == -1) {
      arr.push(randomNumber);
    }
  }
  return console.log(arr);
};

SevenRandomNumbers();

const reverseCountries = (arry) => {
  let newArr = arry;
  arry = [];
  for (let i = newArr.length - 1; i >= 0; i--) {
    arry.push(newArr[i]);
  }
  return console.log(arry);
};

reverseCountries([
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
]);
