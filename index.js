const operter = prompt("Enter Operetor (either +, -, * or /):");
const number1 = parseFloat(prompt("Enter value"));
const number2 = parseFloat(prompt("Enter value"));

function add() {
    let sum = number1 + number2;
    return sum
}
function sub() {
    let min = number1 - number2;
    return min
}
function mul() {
    let multiply = number1 * number2;
    return multiply;
}
function div() {
    let divide = number1 / number2;
    return divide;
}
let val = 0;

if (operter == "+") {
    val = add(number1, number2);
}
else if (operter == "-") {
    val = sub(number1, number2);
}
else if (operter == "*") {
    val = mul(number1, number2)
}
else if (operter == "/") {
    val = div(number1, number2);
}

console.log("value 01: " + number1 + " value 02: " + number2 + " RESULT: " + val);