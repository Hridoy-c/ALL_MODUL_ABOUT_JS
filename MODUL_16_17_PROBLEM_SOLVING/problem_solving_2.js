function applyDiscount(price, percent) {
   return price - (price * percent) / 100;

}



console.log(applyDiscount(1000, 20));
console.log(applyDiscount(1000, 10));
console.log(applyDiscount(1000, 5));