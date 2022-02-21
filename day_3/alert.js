const now = new Date();
const year = now.getFullYear(); // вернет year
const month = now.getMonth() + 1; // вернет month(0 - 11)
const date = now.getDate(); // вернет date (1 - 31)
const hours = now.getHours(); // вернет number (0 - 23)
const minutes = now.getMinutes(); // вернет number (0 -59)

console.log(`${year}/${month}/${date}/${hours}:${minutes}`);