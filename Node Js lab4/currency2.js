// currency2.js

let Currency = function(rates) {
  // rates to obiekt z kursami złotego
  this.rates = rates;
}

Currency.prototype.roundTwoDecimals = function(amount) {
  return Math.round(amount * 100) / 100;
}

Currency.prototype.dollarToZloty = function(dollar) {
  return this.roundTwoDecimals(dollar * this.rates.usd);
}

Currency.prototype.euroToZloty = function(euro) {
  return this.roundTwoDecimals(euro * this.rates.eur);
}

Currency.prototype.canadianToZloty = function(canada) {
  return this.roundTwoDecimals(canada * this.rates.cad);
}

Currency.prototype.funtToZloty = function(funt) {
  return this.roundTwoDecimals(funt * this.rates.gbp);
}

Currency.prototype.frankToZloty = function(frank) {
  return this.roundTwoDecimals(frank * this.rates.chf);
}

module.exports = exports = Currency;
