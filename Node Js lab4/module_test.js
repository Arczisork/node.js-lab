const currency = require('./currency1');



console.log('50 dolarów odpowiada następującej ilości zlotych:');

console.log(currency.dollarToZloty(50));

console.log('50 euro odpowiada następującej ilości zlotych:');

console.log(currency.euroToZloty(50));

console.log('50 dolarów kanadyjskich odpowiada następującej ilości zlotych:');

console.log(currency.canadianToZloty(50));

console.log('50 funtów odpowiada następującej ilości zlotych:');

console.log(currency.funtToZloty(50));

console.log('50 franków odpowiada następującej ilości zlotych:');

console.log(currency.frankToZloty(50));



const Currency2 = require('./currency2');

// Przekazujemy kursy do konstruktora
const currency2 = new Currency2({
  usd: 3.64,
  eur: 4.23,
  cad: 2.59,
  gbp: 4.81,
  chf: 4.59
});

console.log('\n--- Test currency2 (wersja obiektowa) ---');

console.log('50 dolarów → złote:');
console.log(currency2.dollarToZloty(50));

console.log('50 euro → złote:');
console.log(currency2.euroToZloty(50));

console.log('50 dolarów kanadyjskich → złote:');
console.log(currency2.canadianToZloty(50));

console.log('50 funtów → złote:');
console.log(currency2.funtToZloty(50));

console.log('50 franków → złote:');
console.log(currency2.frankToZloty(50));
