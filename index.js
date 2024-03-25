import {db} from "js-database-connection";

var rates = {
    "USD": 1,
    "EUR": 0.85,
    "JPY": 110.16,
    "IDR": 14112.00
};

function convertCurrency(amount, fromCurrency, toCurrency) {
    return amount * rates[toCurrency] / rates[fromCurrency];
}

var amountInUSD = 100;
var amountInEUR = convertCurrency(amountInUSD, "USD", "EUR");

console.log(amountInUSD + " USD is equivalent to " + amountInEUR + " EUR.");