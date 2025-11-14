


let zlotyDollar = 3.64;
let zlotyEuro = 4.23;
let zlotyCanadian = 2.59;
let zlotyFunt = 4.81;
let zlotyFrank = 4.59;



/*let canadianDollar = 0.91;

function roundTwoDecimals(amount) {
return Math.round(amount * 100) / 100;
}
exports.canadianToUS = function(canadian) {
return roundTwoDecimals(canadian * canadianDollar);
}
exports.USToCanadian = function(us) {
return roundTwoDecimals(us / canadianDollar);
}
*/





function roundTwoDecimals(amount) {
return Math.round(amount * 100) / 100;
}
exports.dollarToZloty = function(dollar) {
return roundTwoDecimals(dollar * zlotyDollar);
}

exports.euroToZloty = function(euro) {
return roundTwoDecimals(euro * zlotyEuro);
}

exports.canadianToZloty = function(canada) {
return roundTwoDecimals(canada * zlotyCanadian);
}

exports.funtToZloty = function(funt) {
return roundTwoDecimals(funt * zlotyFunt);
}

exports.frankToZloty = function(frank) {
return roundTwoDecimals(frank * zlotyFrank);
}

const currency = require('./currency1');

/*console.log('50 dolarów kanadyjskich odpowiada następującej ilości dolarów amerykańskich:');

console.log(currency.canadianToUS(50));

console.log('30 dolarów amerykańskich odpowiadanastępującej ilości dolarów kanadyjskich:');

console.log(currency.USToCanadian(30));

*/


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










//Ścieżka dostępu używa ./ w celu wskazania,że moduł znajduje się w tym samymkatalogu, w którym jest skrypt aplikacji.
//Użycie funkcji canadianToUS() modułu
//Użycie funkcji USToCanadian() modułu