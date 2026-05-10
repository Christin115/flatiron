let history = [];

function add(num1, num2) {
    let result = num1 + num2;
    history.push(`${num1} + ${num2} = ${result}`);
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    history.push(`${num1} - ${num2} = ${result}`);
    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;
    history.push(`${num1} * ${num2} = ${result}`);
    return result;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    }

    let result = num1 / num2;
    history.push(`${num1} / ${num2} = ${result}`);
    return result;
}

function showHistory() {
    console.log("Calculation History:");

    if (history.length === 0) {
        console.log("No calculations performed yet.");
    } else {
        history.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

console.log(add(10, 5));       
console.log(subtract(10, 5));   
console.log(multiply(10, 5));  
console.log(divide(10, 5));     

showHistory();