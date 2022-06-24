const opr = prompt("enter operator (-,+,/,*)");
let num1 = parseFloat(prompt("Enter first number:"))
let num2 = parseFloat(prompt("Enter second number:"))
let answer = 0;

if (opr == "+") {
    window.alert (num1 + num2)
}
else if (opr == "-") {
    window.alert (num1 - num2)
}
else if (opr == "/") {
    window.alert(num1 / num2)
}
else if (opr == "*") {
    window.alert (num1 * num2)
};