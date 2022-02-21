const fullName = (firstName = 'Артур', lastName = 'Москвичёв') => {
  let space = ' ';
  let fullName = firstName + space + lastName;
  return fullName;
};
fullName();

const addNumber = (firstNumber, secondNumber) => {
  let sum = firstNumber + secondNumber;
  return sum;
};

addNumber();

const areaOfRectangle = (length, width) => {
  let area = length * width;
  return area;
};

areaOfRectangle();

const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length + width);
  return perimeter;
};

perimeterOfRectangle();

const volumeOfRectPrism = (length, width, heigth) => {
  let volume = length * width * heigth;
  return volume;
};

volumeOfRectPrism();

const areaOfCircle = (radius) => {
  let areaCircle = Math.PI * radius * radius;
  return areaCircle;
};

areaOfCircle();

const lengthOfCircle = (radius) => {
  let lengthCircle = 2 * Math.PI * radius;
  return lengthCircle;
};

lengthOfCircle();

const density = (weight, volume) => {
  let density = weight / volume;
  return density;
};

density();

const speed = (distance, time) => {
  let speed = distance / time;
  return speed;
};

speed();

const ITM = (weight, heigth) => {
  let itm = weight / (heigth * heigth);
  if (itm < 18.5) {
    return console.log('Недостаточный вес');
  } else if (itm >= 18.5 && itm <= 24.9) {
    return console.log('Нормальный вес');
  } else if (itm >= 25 && itm <= 29.9) {
    return console.log('Избыточный вес');
  } else {
    return console.log('Ожирение');
  }
};

ITM();

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

checkSeason();

const findMax = (firstNumber, secondNumber, thirdNumber) => {
  if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    return console.log(firstNumber);
  } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    return console.log(secondNumber);
  } else if (thirdNumber >= firstNumber && thirdNumber >= secondNumber) {
    return console.log(thirdNumber);
  }
};

findMax();

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

solveQuadratic();

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
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bangladesh',
    'Barbados',
    'Bahamas',
    'Bahrain',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'British Indian Ocean Territory',
    'British Virgin Islands',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burma',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo-Brazzaville',
    'Congo-Kinshasa',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cura?ao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'El Salvador',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Federated States of Micronesia',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Lands',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard and McDonald Islands',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'R?union',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Barth?lemy',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'S?o Tom? and Pr?ncipe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Swaziland',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Vietnam',
    'Venezuela',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
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

swapValues();

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

rgbColorGenerator();

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

arrayOfHexaColors();

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

const convertRGBtoHex = (hexa) => {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let str = String(hexa);
  let str21 = '';
  if (str[0] === '#') {
    for (let i = 1; i <= str.length - 1; i++) {
      str21 += str[i];
    }
  }
  arr = str21.split(',');
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

convertRGBtoHex();

const generateColors = (numberName, count) => {
  if (numberName == 'hex') {
    arrayOfHexaColors(count);
  } else if (numberName == 'rgb') {
    rgbColorGenerator(count);
  }
};
generateColors();
