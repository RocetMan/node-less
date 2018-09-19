var Convert = require('./converter');

var baseCurrency = 28;

var converter = new Convert(baseCurrency);
console.log(converter.convertToUa(100));
console.log(converter.convertToUs(1000));