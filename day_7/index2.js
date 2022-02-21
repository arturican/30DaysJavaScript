const  userIdGenerator  = () => {
    
    let symbol = prompt('Введите количество символов');
    let generator = prompt('Введите количество генераций');
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWYZXabcdefghijklmnopqrstuvwxyz0123456789";
    let str2 = '';
    let str3 = '';
       for (j = 0; j <= generator - 1; j++){

        for (i = 0; i <= symbol - 1; i++){
            str2 += str.charAt(Math.floor((Math.random() * (str.length - 1))));
        }
           str2 = str2+'\n';
       }
       
            
    return console.log(str2);
}

userIdGenerator();