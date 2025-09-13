const num1 = parseFloat(prompt("Enter first number:"));
const operator = prompt("Enter operator (+, -, *, /):");
const num2 = parseFloat(prompt("Enter second number:"));
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero";
    }
} else {
    result = "Invalid operator";
}

alert("Result: " + result);