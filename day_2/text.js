let text = 'Он зарабатывает 5000 евро с зарплаты в месяц, годовой бонус в 10000 евро, онлайн-курсы в 15000 евро в месяц';
let number = /\d+/g;
let array = text.match(number);

console.log(+array[0] * 12 + +array[1] + +array[2] * 12); 