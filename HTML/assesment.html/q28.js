const num = [10,20,30,40];
const average = num.reduce((acc, curr) => acc + curr, 0) / num.length;
console.log(average);