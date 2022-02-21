const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Germany",
    "Hungary",
    "Japan",
    "Kenya"
  ];
let message = 'All these are countries without land';
let arr = [];
for (let i = 0; i <= countries.length - 1; i++){
    str = countries[i];
    if(str.includes('ia')){
        arr.push(str);
    }
} 



(arr.length >= 1 ) ? console.log(arr): 


console.log(message);
  
  
  
