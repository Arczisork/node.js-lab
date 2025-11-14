


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