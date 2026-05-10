let calculationHistory = [];

function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

function addToHistory(num1, num2, operator, result) {
    calculationHistory.push({
        oper1: num1,
        oper2: num2,
        operator: operator,
        result: result
    });
}

function add(num1, num2) {
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return "Error: Inputs must be numbers";
    }

    const result = num1 + num2;
    addToHistory(num1, num2, "+", result);
    return result;
}

function subtract(num1, num2) {
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return "Error: Inputs must be numbers";
    }

    const result = num1 - num2;
    addToHistory(num1, num2, "-", result);
    return result;
}

function multiply(num1, num2) {
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return "Error: Inputs must be numbers";
    }

    const result = num1 * num2;
    addToHistory(num1, num2, "*", result);
    return result;
}

function divide(num1, num2) {
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        return "Error: Inputs must be numbers";
    }

    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    }

    const result = num1 / num2;
    addToHistory(num1, num2, "/", result);
    return result;
}

function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No stored calculations.");
        return;
    }

    console.log("Calculation History:");

    calculationHistory.forEach((calc, index) => {
        console.log(
            `${index + 1}. ${calc.oper1} ${calc.operator} ${calc.oper2} = ${calc.result}`
        );
    });
}

function displayCalculation(index) {
    if (index < 1 || index > calculationHistory.length) {
        console.log("Invalid calculation number.");
        return;
    }

    const calc = calculationHistory[index - 1];

    console.log(
        `${index}. ${calc.oper1} ${calc.operator} ${calc.oper2} = ${calc.result}`
    );
}

console.log(add(10, 5));
console.log(subtract(20, 8));
console.log(multiply(4, 6));
console.log(divide(15, 3));


console.log(add("10", 5));
console.log(divide(10, 0));

console.log("-----");

displayHistory();

console.log("-----");

displayCalculation(2);