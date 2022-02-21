const countries = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
  ];
let message = 'All these are countries without land';
let arr = [];
let county = '';
for (let i = 0; i <= countries.length - 1; i++){
    str = countries[i].length;
    arr.push([countries[i],+str]);
} 
    let max = Math.max.apply(null, arr)

    for ( i = 0; i <= countries.length - 1; i++){
        if (max === countries[i].length)
        {
            county += countries[i] + ' ';
        }
} 
    
console.log(arr);




