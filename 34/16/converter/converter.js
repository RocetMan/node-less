var Convert = function (baseCurrency) {
    this.baseCurrency = baseCurrency
};

Convert.prototype.roundTwoDecimal = function (amount) {
    return Math.round(amount * 100) / 100;
};
Convert.prototype.convertToUa = function (currency) {
    return this.roundTwoDecimal(currency * this.baseCurrency);
};

Convert.prototype.convertToUs = function (currency) {
    return this.roundTwoDecimal(currency / this.baseCurrency);
};

module.exports = Convert;
