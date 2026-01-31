function DiscountCalculator(discountPercentage) {
    return function(price) {
        return price - (price * discountPercentage / 100);
    }
}
let tenPercentDiscount = DiscountCalculator(10);
console.log(tenPercentDiscount(200)); 