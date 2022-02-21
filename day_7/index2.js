const userIdGenerator = () => {
  let symbol = prompt('Введите количество символов');
  let generator = prompt('Введите количество генераций');
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWYZXabcdefghijklmnopqrstuvwxyz0123456789';
  let str20 = '';
  for (let j = 0; j <= generator - 1; j++) {
    for (let i = 0; i <= symbol - 1; i++) {
      str20 += str.charAt(Math.floor(Math.random() * (str.length - 1)));
    }
    str20 = str20 + '\n';
  }

  return console.log(str20);
};
userIdGenerator();
