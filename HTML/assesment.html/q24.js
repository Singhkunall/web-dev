const price = [100, 200, 300, 400, 500];
const gstprice = price.map(p => p + (p * 0.18));
console.log(gstprice);