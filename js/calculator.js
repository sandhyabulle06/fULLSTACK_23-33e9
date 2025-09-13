class Calculator {
    constructor() {
        this.value = 0;
    }

    add(num) {
        this.value += num;
        return this.value;
    }

    subtract(num) {
        this.value -= num;
        return this.value;
    }

    multiply(num) {
        this.value *= num;
        return this.value;
    }

    divide(num) {
        if (num === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.value /= num;
        return this.value;
    }

    clear() {
        this.value = 0;
        return this.value;
    }

    getValue() {
        return this.value;
    }
}

// Example usage:
const calc = new Calculator();
console.log(calc.add(5));       // 5
console.log(calc.subtract(2));  // 3
console.log(calc.multiply(4));  // 12
console.log(calc.divide(3));    // 4
console.log(calc.clear());      // 