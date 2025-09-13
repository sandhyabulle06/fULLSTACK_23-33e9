 
function compoundInterest(principal, rate, timesCompounded, years) {
    return principal * Math.pow(1 + rate / timesCompounded, timesCompounded * years);
}

 
const principal = 1000; // $1,000
const rate = 0.05; // 5% annual interest
const timesCompounded = 4; // Quarterly
const years = 10;

const finalAmount = compoundInterest(principal, rate, timesCompounded, years);
console.log(`Final amount after ${years} years: $${finalAmount.toFixed(2)}`);