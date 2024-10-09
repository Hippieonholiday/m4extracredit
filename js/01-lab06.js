// GLOBAL VARIABLES
var futureValue;
var investment;
var rate;
var years;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt("Enter investment amount as xxxx.xx"));
    if (isNaN(investment) || investment < 0 ) {
    alert("Field must be filled in with a positive number");
    }
} while (isNaN(investment) || investment < 0 );

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if (isNaN(rate) || rate < 0 || rate > 6 ) {
    alert("Field must be filled in with a positive number of less than 6");
    }
} while (isNaN(rate) || rate < 0 || rate > 6 );

do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if (isNaN(years) || years > 30 || years < 1 ) {
    alert("Field must be filled in with a positive number between 1 and 30");
    }
} while (isNaN(years) || years > 30 || years < 1 );


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);